export interface ImageUrls {
  small: string;
}

export interface ImageLinks {
  html: string;
}

export interface User {
  updated_at: string;
  name: string;
  username: string;
}

export interface Image {
  id: string;
  alt_description: string | null;
  urls: ImageUrls;
  links: ImageLinks;
  likes: number;
  user: User;
}

export interface FetchImagesResponse {
  images: Image[];
  totalPages: number;
}

export interface ImageCardProps {
  image: Image;
}

export interface ImageGalleryProps {
  images: Image[];
  openModal: (image: Image) => void;
}
