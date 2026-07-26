export type ImageViewerItem = {
  id: string;
  src: string;
  thumbnailSrc?: string;
  alt?: string;
  title?: string;
  description?: string;
};

export type ImageViewerThumbnails = boolean | "auto";

export type ImageViewerError = {
  image: ImageViewerItem;
  index: number;
  event: Event;
};
