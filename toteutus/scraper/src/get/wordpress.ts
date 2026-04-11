/**
 * WordPress REST API - Page Response (single page)
 */
export interface WpPage {
  /** Unique identifier for the page. */
  id: number;

  /** The date the page was published, in the site's timezone. */
  date: string | null;

  /** The date the page was published, in GMT. */
  date_gmt: string | null;

  /** Globally unique identifier for the page. */
  guid: {
    rendered: string;
    raw?: string; // Only available in 'edit' context
  };

  /** URL to the page. */
  link: string;

  /** The date the page was last modified, in the site's timezone. */
  modified: string;

  /** The date the page was last modified, in GMT. */
  modified_gmt: string;

  /** An alphanumeric identifier for the page (slug). */
  slug: string;

  /** A named status for the page. */
  status?: 'publish' | 'future' | 'draft' | 'pending' | 'private';

  /** Type of object (always "page" for this endpoint). */
  type: 'page';

  /** Password to protect access (only in 'edit' context). */
  password?: string;

  /** Permalink template (only in 'edit' context). */
  permalink_template?: string;

  /** Auto-generated slug (only in 'edit' context). */
  generated_slug?: string;

  /** ID of the parent page (0 if no parent). */
  parent: number | null;

  /** The title of the page. */
  title: {
    rendered: string;
    raw?: string; // Only in 'edit' context
  };

  /** The content of the page. */
  content?: {
    rendered: string;
    raw?: string; // Only in 'edit' context
    protected: boolean;
  };

  /** The ID of the author. */
  author: number;

  /** The excerpt of the page. */
  excerpt?: {
    rendered: string;
    raw?: string; // Only in 'edit' context
    protected: boolean;
  };

  /** The ID of the featured media (0 if none). */
  featured_media: number | null;

  /** Whether or not comments are open. */
  comment_status?: 'open' | 'closed';

  /** Whether or not the page can be pinged. */
  ping_status?: 'open' | 'closed';

  /** The order of the page in relation to other pages. */
  menu_order: number;

  /** The theme template used to display the page. */
  template?: string;

  /** Arbitrary meta fields (can be extended by plugins). */
  meta: Record<string, any>;

  // Optional fields that appear in some contexts
  _links?: any; // HATEOAS links (if _embed is used or manually requested)
}

/**
 * Optional: A more strict version for the 'edit' context (includes raw fields and password)
 */
export interface WpPageEdit extends WpPage {
  status: 'publish' | 'future' | 'draft' | 'pending' | 'private';
  password?: string;
  permalink_template?: string;
  generated_slug?: string;

  title: {
    raw: string;
    rendered: string;
  };

  content: {
    raw: string;
    rendered: string;
    protected: boolean;
  };

  excerpt?: {
    raw: string;
    rendered: string;
    protected: boolean;
  };
}