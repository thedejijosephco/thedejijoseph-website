import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import SEO from '@/components/SEO';
import { usePosts } from '@/hooks/use-ghost';
import { format } from 'date-fns';
import { ArrowRight, Clock } from 'lucide-react';

const Notes = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, error } = usePosts(page);

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
              <p className="body-large text-muted-foreground">
                Thoughts on AI infrastructure, LLMOps, and building production ML systems.
              </p>
            </div>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="section-padding section-spacing bg-muted/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-40 h-40 border-4 border-primary/10 -translate-x-1/2 -translate-y-1/2" />

          <div className="max-w-7xl mx-auto">
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

                {/* Pagination */}
                {data.pagination.pages > 1 && (
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

        <CallToAction />
      </main>

      <Footer />
    </div>
  );
};

export default Notes;
