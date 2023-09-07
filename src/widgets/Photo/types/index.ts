export interface PhotoCatTypes {
  id: string;
  url: string;
  width: number;
  height: number;
}

export interface UnsplashPhoto {
  id: string;
  alt_description: string | null;
  description: string | null;
  likes: number;
  created_at: string;
  urls: {
    regular: string;
    small: string;
  };
  user: {
    name: string;
    username: string;
  };
}
