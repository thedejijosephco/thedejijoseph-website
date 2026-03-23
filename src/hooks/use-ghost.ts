import { useQuery } from '@tanstack/react-query';
import { getPosts, getPostBySlug, getTags } from '@/lib/ghost';

export function usePosts(page = 1, limit = 12, options?: { tag?: string; search?: string }) {
  return useQuery({
    queryKey: ['ghost-posts', page, limit, options?.tag, options?.search],
    queryFn: () => getPosts(page, limit, options),
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

export function useTags() {
  return useQuery({
    queryKey: ['ghost-tags'],
    queryFn: getTags,
    staleTime: 10 * 60 * 1000,
  });
}
