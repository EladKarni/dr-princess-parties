/**
 * Helper to extract URL from Payload media field
 * Media fields can be either an object with url/alt properties or a string ID
 */
export interface Media {
  url?: string;
  alt?: string;
}

export function getMediaUrl(media: Media | string | null | undefined): string | null {
  if (!media) return null;

  if (typeof media === 'string') {
    // If it's a string ID, we'd need to fetch it, but for now return null
    // In practice, when depth > 0, Payload populates the full object
    return null;
  }

  if (typeof media === 'object' && media.url) {
    return media.url;
  }

  return null;
}
