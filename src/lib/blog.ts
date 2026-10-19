import { getCollection, type CollectionEntry } from 'astro:content';
import { langs, type Lang } from '../i18n/ui';

export type Post = CollectionEntry<'blog'>;

// Entry ids look like "en/daily-routine".
export function postLang(post: Post): Lang {
  return post.id.split('/')[0] as Lang;
}

export function postSlug(post: Post): string {
  return post.id.split('/').slice(1).join('/');
}

export async function getAllPosts(): Promise<Post[]> {
  const posts = await getCollection('blog', ({ data, id }) => {
    const lang = id.split('/')[0] as Lang;
    return langs.includes(lang) && (import.meta.env.DEV || !data.draft);
  });
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export async function getPosts(lang: Lang): Promise<Post[]> {
  return (await getAllPosts()).filter((p) => postLang(p) === lang);
}
