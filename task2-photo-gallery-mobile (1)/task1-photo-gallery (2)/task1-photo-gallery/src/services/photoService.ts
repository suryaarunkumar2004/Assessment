import { Photo } from "../types";
import { API_BASE_URL } from "../utils/constants";

export const fetchPhotos = async (page: number, limit: number): Promise<Photo[]> => {
  const response = await fetch(`${API_BASE_URL}?page=${page}&limit=${limit}`);
  if (!response.ok) {
    throw new Error("Failed to fetch photos");
  }
  const data: Photo[] = await response.json();
  return data;
};
