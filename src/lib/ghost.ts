const GHOST_URL = 'https://notes.thedejijoseph.com';
const GHOST_KEY = 'd59e0260aa7961f6ad52bdb92f';
const GHOST_API = `${GHOST_URL}/ghost/api/content`;

export interface GhostPost {
  id: string;
  uuid: string;
  title: string;
  slug: string;
  html: string;
  excerpt: string;
  feature_image: string | null;
  feature_image_alt: string | null;
  published_at: string;
  updated_at: string;
  reading_time: number;
  tags: GhostTag[];
  primary_tag: GhostTag | null;
  authors: GhostAuthor[];
  primary_author: GhostAuthor;
  meta_title: string | null;
  meta_description: string | null;
  og_image: string | null;
  og_title: string | null;
  og_description: string | null;
  custom_excerpt: string | null;
}

export interface GhostTag {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  count?: { posts: number };
}

export interface GhostAuthor {
  id: string;
  name: string;
  slug: string;
  profile_image: string | null;
  bio: string | null;
}

export interface GhostPagination {
  page: number;
  limit: number;
  pages: number;
  total: number;
  next: number | null;
  prev: number | null;
}

interface GhostPostsResponse {
  posts: GhostPost[];
  meta: { pagination: GhostPagination };
}

interface GhostPostResponse {
  posts: GhostPost[];
}

interface GhostTagsResponse {
  tags: GhostTag[];
}

async function ghostFetch<T>(endpoint: string, params: Record<string, string> = {}): Promise<T> {
  const url = new URL(`${GHOST_API}${endpoint}`);
  url.searchParams.set('key', GHOST_KEY);
  Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));

  const res = await fetch(url.toString());
  if (!res.ok) {
    throw new Error(`Ghost API error: ${res.status} ${res.statusText}`);
  }
  return res.json();
}

export async function getPosts(
  page = 1,
  limit = 12,
  options?: { tag?: string; search?: string }
): Promise<{ posts: GhostPost[]; pagination: GhostPagination }> {
  const params: Record<string, string> = {
    include: 'tags,authors',
    fields: 'id,uuid,title,slug,excerpt,custom_excerpt,feature_image,feature_image_alt,published_at,updated_at,reading_time,meta_title,meta_description',
    limit: String(limit),
    page: String(page),
    order: 'published_at desc',
  };

  if (options?.tag) {
    params.filter = `tag:${options.tag}`;
  }

  const data = await ghostFetch<GhostPostsResponse>('/posts/', params);
  
  // Client-side search filtering (Ghost Content API doesn't have a search endpoint)
  let posts = data.posts;
  if (options?.search) {
    const q = options.search.toLowerCase();
    posts = posts.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        (p.excerpt && p.excerpt.toLowerCase().includes(q)) ||
        (p.custom_excerpt && p.custom_excerpt.toLowerCase().includes(q))
    );
  }

  return { posts, pagination: data.meta.pagination };
}

export async function getPostBySlug(slug: string): Promise<GhostPost> {
  const data = await ghostFetch<GhostPostResponse>(`/posts/slug/${slug}/`, {
    include: 'tags,authors',
  });
  if (!data.posts || data.posts.length === 0) {
    throw new Error('Post not found');
  }
  return data.posts[0];
}

export async function getTags(): Promise<GhostTag[]> {
  const data = await ghostFetch<GhostTagsResponse>('/tags/', {
    include: 'count.posts',
    order: 'count.posts desc',
    limit: 'all',
  });
  return data.tags.filter((t) => !t.name.startsWith('#'));
}

export async function getPostsByTag(tagSlug: string, page = 1, limit = 12): Promise<{ posts: GhostPost[]; pagination: GhostPagination }> {
  return getPosts(page, limit, { tag: tagSlug });
}
