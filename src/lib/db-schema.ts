/**
 * Database Schema Constants
 * Used to separate data between different versions of the website
 * using the same Firebase project.
 */

export const SITE_ID = 'pk-creative';
export const DB_PREFIX = 'pkc_';

export const COLLECTIONS = {
  SITE_CONTENT: 'siteContent',
  PROJECTS: `${DB_PREFIX}projects`,
  PROJECT_CATEGORIES: `${DB_PREFIX}projectCategories`,
  GALLERY_IMAGES: `${DB_PREFIX}galleryImages`,
  GALLERY_CATEGORIES: `${DB_PREFIX}galleryCategories`,
  CONTACT_MESSAGES: `${DB_PREFIX}contactMessages`,
  TESTIMONIALS: `${DB_PREFIX}testimonials`,
  LEADS: `${DB_PREFIX}leads`,
};

export const DOCS = {
  SITE_SETTINGS: SITE_ID,
};
