import { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import SEO from '@/components/SEO';
import { usePosts, useTags } from '@/hooks/use-ghost';
import { format } from 'date-fns';
import { ArrowRight, Clock, Search, X, Mail } from 'lucide-react';

const Notes = () => {
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSearch, setActiveSearch] = useState('');
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const { data, isLoading, error } = usePosts(page, 18, {
    tag: activeTag || undefined,
    search: activeSearch || undefined,
  });
  const { data: tags } = useTags();

  const handleSearch = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    setActiveSearch(searchQuery);
    setPage(1);
  }, [searchQuery]);

  const clearSearch = useCallback(() => {
    setSearchQuery('');
    setActiveSearch('');
    setPage(1);
  }, []);

  const handleTagClick = useCallback((tagSlug: string) => {
    setActiveTag((prev) => (prev === tagSlug ? null : tagSlug));
    setPage(1);
  }, []);

  const [subscribeEmail, setSubscribeEmail] = useState('');
  const [subscribeLoading, setSubscribeLoading] = useState(false);
  const [subscribeSuccess, setSubscribeSuccess] = useState(false);
  const [subscribeError, setSubscribeError] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!subscribeEmail) return;
    setSubscribeLoading(true);
    setSubscribeError('');
    setSubscribeSuccess(false);

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/ghost/subscribe`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: subscribeEmail }),
        }
      );
      const result = await res.json();
      if (!res.ok) throw new Error(result.error || 'Failed to subscribe');
      setSubscribeSuccess(true);
      setSubscribeEmail('');
    } catch (err: any) {
      setSubscribeError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setSubscribeLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Notes"
        description="Thoughts on AI infrastructure, LLMOps, and building production ML systems — by Deji Joseph."
        url="/notes"
      />
      <Header />

      <main className="pt-24">
        {/* Hero */}
        <section className="section-padding py-20 md:py-32 relative overflow-hidden">
          <div className="absolute top-20 right-10 w-32 h-32 border-4 border-primary/20" />
          <div className="absolute bottom-10 left-20 w-16 h-16 bg-primary/10" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="max-w-3xl">
              <div className="accent-bar mb-6" />
              <h1 className="heading-hero mb-8">
                My <span className="text-primary">Notes</span>
              </h1>
              <p className="body-large text-muted-foreground mb-10">
                Thoughts on AI infrastructure, LLMOps, and building production ML systems.
              </p>

              {/* Search Bar */}
              <form onSubmit={handleSearch} className="flex items-stretch gap-3 max-w-lg">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search notes..."
                    className="w-full h-full pl-11 pr-10 bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors font-body text-sm"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={clearSearch}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
                <button type="submit" className="btn-primary px-6">
                  Search
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Tags + Posts */}
        <section className="section-padding section-spacing bg-muted/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-40 h-40 border-4 border-primary/10 -translate-x-1/2 -translate-y-1/2" />

          <div className="max-w-7xl mx-auto">
            {/* Tag Filters */}
            {tags && tags.length > 0 && (
              <div className="mb-12">
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => { setActiveTag(null); setPage(1); }}
                    className={`px-4 py-2 text-xs font-medium uppercase tracking-wider border transition-all duration-300 ${
                      !activeTag
                        ? 'bg-primary text-primary-foreground border-primary'
                        : 'bg-background text-muted-foreground border-border hover:border-primary/50'
                    }`}
                  >
                    All
                  </button>
                  {tags.map((tag) => (
                    <button
                      key={tag.id}
                      onClick={() => handleTagClick(tag.slug)}
                      className={`px-4 py-2 text-xs font-medium uppercase tracking-wider border transition-all duration-300 ${
                        activeTag === tag.slug
                          ? 'bg-primary text-primary-foreground border-primary'
                          : 'bg-background text-muted-foreground border-border hover:border-primary/50'
                      }`}
                    >
                      {tag.name}
                      {tag.count && (
                        <span className="ml-2 opacity-60">{tag.count.posts}</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Active filters indicator */}
            {(activeSearch || activeTag) && (
              <div className="mb-8 flex items-center gap-3 text-sm text-muted-foreground">
                <span>Filtering by:</span>
                {activeSearch && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-background border border-border">
                    "{activeSearch}"
                    <button onClick={clearSearch} className="hover:text-primary">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {activeTag && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-background border border-border">
                    {tags?.find((t) => t.slug === activeTag)?.name || activeTag}
                    <button onClick={() => { setActiveTag(null); setPage(1); }} className="hover:text-primary">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
              </div>
            )}

            {isLoading && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="bg-background p-8 border border-border/50 animate-pulse">
                    <div className="h-48 bg-muted mb-6" />
                    <div className="h-4 bg-muted mb-3 w-1/3" />
                    <div className="h-6 bg-muted mb-4 w-3/4" />
                    <div className="h-4 bg-muted w-full" />
                    <div className="h-4 bg-muted w-2/3 mt-2" />
                  </div>
                ))}
              </div>
            )}

            {error && (
              <div className="text-center py-20">
                <p className="body-large text-muted-foreground">
                  Unable to load posts. Please try again later.
                </p>
              </div>
            )}

            {data && (
              <>
                {data.posts.length === 0 ? (
                  <div className="text-center py-20">
                    <p className="body-large text-muted-foreground mb-4">
                      No posts found{activeSearch ? ` for "${activeSearch}"` : ''}{activeTag ? ` in this tag` : ''}.
                    </p>
                    <button
                      onClick={() => { clearSearch(); setActiveTag(null); }}
                      className="text-primary hover:underline text-sm font-medium"
                    >
                      Clear filters
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {data.posts.map((post) => (
                      <Link
                        key={post.id}
                        to={`/notes/${post.slug}`}
                        className="bg-background border border-border/50 hover:border-primary/30 transition-all duration-500 card-hover group block"
                      >
                        {post.feature_image && (
                          <div className="aspect-[16/9] overflow-hidden">
                            <img
                              src={post.feature_image}
                              alt={post.feature_image_alt || post.title}
                              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                              loading="lazy"
                            />
                          </div>
                        )}
                        <div className="p-8 space-y-4">
                          <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <time dateTime={post.published_at}>
                              {format(new Date(post.published_at), 'MMM d, yyyy')}
                            </time>
                            {post.reading_time > 0 && (
                              <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {post.reading_time} min read
                              </span>
                            )}
                          </div>

                          {post.primary_tag && (
                            <span className="inline-block px-3 py-1 text-xs font-medium bg-muted text-muted-foreground">
                              {post.primary_tag.name}
                            </span>
                          )}

                          <h2 className="font-display text-xl font-bold group-hover:text-primary transition-colors">
                            {post.title}
                          </h2>

                          <p className="body-regular text-muted-foreground line-clamp-3">
                            {post.custom_excerpt || post.excerpt}
                          </p>

                          <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                            Read more
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}

                {/* Pagination */}
                {!activeSearch && data.pagination.pages > 1 && (
                  <div className="flex items-center justify-center gap-4 mt-16">
                    <button
                      onClick={() => setPage((p) => Math.max(1, p - 1))}
                      disabled={!data.pagination.prev}
                      className="btn-primary disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      Previous
                    </button>
                    <span className="text-sm text-muted-foreground">
                      Page {data.pagination.page} of {data.pagination.pages}
                    </span>
                    <button
                      onClick={() => setPage((p) => p + 1)}
                      disabled={!data.pagination.next}
                      className="btn-primary disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      Next
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </section>

        {/* Subscribe Section */}
        <section className="section-padding section-spacing relative overflow-hidden">
          <div className="absolute top-10 right-10 w-24 h-24 border-4 border-primary/10" />

          <div className="max-w-3xl mx-auto text-center">
            <div className="accent-bar mx-auto mb-8" />
            <Mail className="w-10 h-10 text-primary mx-auto mb-6" />
            <h2 className="heading-section mb-4">
              Stay <span className="text-primary">Updated</span>
            </h2>
            <p className="body-large text-muted-foreground mb-10">
              Subscribe to get new posts delivered straight to your inbox.
            </p>

            {subscribeSuccess ? (
              <div className="p-6 border border-primary/30 bg-primary/5">
                <p className="font-display font-bold text-lg text-primary mb-2">You're in! 🎉</p>
                <p className="body-regular text-muted-foreground">
                  Check your inbox for a confirmation email.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={subscribeEmail}
                  onChange={(e) => setSubscribeEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 px-4 py-3 bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors font-body text-sm"
                />
                <button
                  type="submit"
                  disabled={subscribeLoading}
                  className="btn-primary disabled:opacity-50"
                >
                  {subscribeLoading ? 'Subscribing...' : 'Subscribe'}
                </button>
              </form>
            )}
            {subscribeError && (
              <p className="text-destructive text-sm mt-4">{subscribeError}</p>
            )}
          </div>
        </section>

        <CallToAction />
      </main>

      <Footer />
    </div>
  );
};

export default Notes;
