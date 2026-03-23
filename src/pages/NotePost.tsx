import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import SEO from '@/components/SEO';
import { usePost } from '@/hooks/use-ghost';
import { format } from 'date-fns';
import { ArrowLeft, Clock } from 'lucide-react';

const NotePost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: post, isLoading, error } = usePost(slug || '');

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24">
          <div className="section-padding py-20">
            <div className="max-w-3xl mx-auto animate-pulse space-y-6">
              <div className="h-4 bg-muted w-1/4" />
              <div className="h-10 bg-muted w-3/4" />
              <div className="h-4 bg-muted w-1/3" />
              <div className="h-64 bg-muted mt-8" />
              <div className="space-y-3 mt-8">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="h-4 bg-muted" style={{ width: `${70 + Math.random() * 30}%` }} />
                ))}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24">
          <div className="section-padding py-32 text-center">
            <h1 className="heading-section mb-6">Post not found</h1>
            <p className="body-large text-muted-foreground mb-10">
              The post you're looking for doesn't exist or has been removed.
            </p>
            <Link to="/notes" className="btn-primary">
              <ArrowLeft className="w-4 h-4" />
              Back to Notes
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const postDescription = post.meta_description || post.custom_excerpt || post.excerpt || '';

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={post.meta_title || post.title}
        description={postDescription.slice(0, 160)}
        url={`/notes/${post.slug}`}
        image={post.og_image || post.feature_image}
        type="article"
        publishedAt={post.published_at}
        updatedAt={post.updated_at}
        authorName={post.primary_author?.name}
        tags={post.tags?.map((t) => t.name)}
      />
      <Header />

      <main className="pt-24">
        <article>
          {/* Post Header */}
          <header className="section-padding py-16 md:py-24 relative overflow-hidden">
            <div className="absolute top-20 right-10 w-32 h-32 border-4 border-primary/20" />

            <div className="max-w-3xl mx-auto relative z-10">
              <Link
                to="/notes"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Notes
              </Link>

              <div className="space-y-6">
                {post.primary_tag && (
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-muted text-muted-foreground">
                    {post.primary_tag.name}
                  </span>
                )}

                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
                  {post.title}
                </h1>

                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  {post.primary_author && (
                    <span className="font-medium text-foreground">
                      {post.primary_author.name}
                    </span>
                  )}
                  <time dateTime={post.published_at}>
                    {format(new Date(post.published_at), 'MMMM d, yyyy')}
                  </time>
                  {post.reading_time > 0 && (
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.reading_time} min read
                    </span>
                  )}
                </div>
              </div>
            </div>
          </header>

          {/* Feature Image */}
          {post.feature_image && (
            <div className="section-padding pb-0">
              <div className="max-w-4xl mx-auto">
                <div className="aspect-[2/1] overflow-hidden relative">
                  <img
                    src={post.feature_image}
                    alt={post.feature_image_alt || post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 w-full h-full border-4 border-primary -z-10" />
                </div>
              </div>
            </div>
          )}

          {/* Post Content */}
          <div className="section-padding py-16 md:py-20">
            <div
              className="max-w-3xl mx-auto prose prose-lg prose-neutral dark:prose-invert
                prose-headings:font-display prose-headings:tracking-tight
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                prose-img:my-8
                prose-blockquote:border-primary prose-blockquote:border-l-4
                prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-none prose-code:text-sm
                prose-pre:bg-secondary prose-pre:text-secondary-foreground prose-pre:rounded-none"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="section-padding pb-16">
              <div className="max-w-3xl mx-auto">
                <div className="border-t border-border pt-8">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag.id}
                        className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground"
                      >
                        {tag.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </article>

        <CallToAction />
      </main>

      <Footer />
    </div>
  );
};

export default NotePost;
