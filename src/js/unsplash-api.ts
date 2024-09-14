import axios, { AxiosResponse } from "axios";

interface ImageResponse {
  total: number;
  total_pages: number;
  results: {
    id: number;
    alt_description: string;
    urls: {
      small: string;
      regular: string;
    };
  }[];
}
const unsplashApi = axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID Ft8ibzI_zdmEm48GTE-HC7bqozxad5zWJkcfZpaWSvY",
  },
});

export default async function getImages(query: string, page: number) {
  const params = {
    query,
    page,
    per_page: 12,
  };

  const response: AxiosResponse<ImageResponse> = await unsplashApi.get(
    "search/photos",
    { params }
  );
  return response.data;
}
