import { useQuery } from '@tanstack/react-query';
import { getPosts, getPostBySlug, getPostsByTag } from '@/lib/ghost';

export function usePosts(page = 1, limit = 12) {
  return useQuery({
    queryKey: ['ghost-posts', page, limit],
    queryFn: () => getPosts(page, limit),
    staleTime: 5 * 60 * 1000,
  });
}

export function usePost(slug: string) {
  return useQuery({
    queryKey: ['ghost-post', slug],
    queryFn: () => getPostBySlug(slug),
    staleTime: 5 * 60 * 1000,
    enabled: !!slug,
  });
}

export function usePostsByTag(tagSlug: string, page = 1, limit = 12) {
  return useQuery({
    queryKey: ['ghost-posts-tag', tagSlug, page, limit],
    queryFn: () => getPostsByTag(tagSlug, page, limit),
    staleTime: 5 * 60 * 1000,
    enabled: !!tagSlug,
  });
}
