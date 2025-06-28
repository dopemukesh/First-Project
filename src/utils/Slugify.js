/**
 * slugify
 * Converts any string into a URL-safe slug:
 * - lowercase
 * - replaces spaces with dashes
 * - removes non-word characters
 * - collapses multiple dashes
 * - trims whitespace
 * If text is null/undefined/empty, returns "unknown".
 *
 * @param {string} text
 * @returns {string}
 */
export default function slugify(text) {
  if (!text) return "unknown";
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')       // replace spaces with -
    .replace(/[^\w\-]+/g, '')   // remove all non-word chars except -
    .replace(/\-\-+/g, '-')     // collapse multiple -
    .replace(/^-+/, '')         // trim leading -
    .replace(/-+$/, '');        // trim trailing -
}
