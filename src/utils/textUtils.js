/**
 * Safely extracts plain text from HTML and truncates to the desired length.
 * Prevents HTML tag corruption that occurs when slicing raw HTML strings.
 *
 * @param {string} html - Raw or sanitized HTML string
 * @param {number} maxLength - Maximum characters to return
 * @returns {string} Plain text excerpt
 */
export const getPlainTextSnippet = (html, maxLength = 300) => {
  if (!html) return '';
  // Remove script and style elements content
  const cleanHtml = html
    .replace(/<script[^>]*>([\S\s]*?)<\/script>/gim, '')
    .replace(/<style[^>]*>([\S\s]*?)<\/style>/gim, '');

  // Strip all HTML tags
  const plainText = cleanHtml
    .replace(/<\/?[^>]+(>|$)/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ')
    .trim();

  if (plainText.length <= maxLength) {
    return plainText;
  }

  // Truncate at word boundary if possible
  const truncated = plainText.slice(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');
  const cleanTruncated = lastSpace > maxLength * 0.75 ? truncated.slice(0, lastSpace) : truncated;

  return `${cleanTruncated}...`;
};
