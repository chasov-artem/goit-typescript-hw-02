import axios from "axios";
import toast from "react-hot-toast";

interface ImageUrls {
  small: string;
}

interface ImageLinks {
  html: string;
}

interface User {
  updated_at: string;
  name: string;
  username: string;
}

interface Image {
  id: string;
  alt_description: string | null;
  urls: ImageUrls;
  links: ImageLinks;
  likes: number;
  user: User;
}

interface FetchImagesResponse {
  images: Image[];
  totalPages: number;
}

export const fetchImages = async (
  page = 1,
  query = "",
  perPage = 6
): Promise<FetchImagesResponse | null | undefined> => {
  try {
    const { data } = await axios.get<{
      results: Image[];
      total_pages: number;
    }>(`https://api.unsplash.com/search/photos`, {
      params: {
        client_id: "o0An1ivigFe085X0c1vk1yk-7bEYxSTLCOuGYVqyDZA",
        query: query,
        page: page,
        per_page: perPage,
      },
    });
    return { images: data.results, totalPages: data.total_pages };
  } catch {
    toast.error("Sorry, but there is no any data here.");
    return null;
  }
};
