import type { BlogPost } from '../../i18n/types';

export type BlogBlock =
  | { type: 'h2' | 'h3' | 'p'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'table'; headers: string[]; rows: string[][] }
  | { type: 'cta'; title: string; text: string; href: string }
  | { type: 'image'; src: string; alt: string; caption?: string };

export interface BlogPostFull extends BlogPost {
  featured?: boolean;
  author?: string;
  /** Accessible alt text for the cover / hero image. */
  imageAlt?: string;
  body: BlogBlock[];
}
