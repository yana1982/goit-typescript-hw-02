import axios from "axios";

const unsplashApi = axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID Ft8ibzI_zdmEm48GTE-HC7bqozxad5zWJkcfZpaWSvY",
  },
});

export default async function getImages(query, page) {
  const params = {
    query,
    page,
    per_page: 12,
  };

  const response = await unsplashApi.get("search/photos", { params });
  return response.data;
}
