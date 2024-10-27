import axios from "axios";
import toast from "react-hot-toast";
import {
  Image,
  FetchImagesResponse,
} from "../Types/types";

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
