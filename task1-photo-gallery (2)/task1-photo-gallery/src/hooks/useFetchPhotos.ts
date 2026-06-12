import { useState, useEffect, useCallback } from "react";
import { Photo } from "../types";
import { fetchPhotos } from "../services/photoService";
import { PHOTOS_PER_PAGE } from "../utils/constants";

interface UseFetchPhotosReturn {
  photos: Photo[];
  loading: boolean;
  error: string | null;
  currentPage: number;
  totalPages: number;
  goToPage: (page: number) => void;
}

export function useFetchPhotos(): UseFetchPhotosReturn {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const TOTAL_PHOTOS = 100;
  const totalPages = Math.ceil(TOTAL_PHOTOS / PHOTOS_PER_PAGE);

  const loadPhotos = useCallback(async (page: number) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchPhotos(page, PHOTOS_PER_PAGE);
      setPhotos(data);
    } catch (err) {
      setError("Failed to load photos. Please try again.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadPhotos(currentPage);
  }, [currentPage, loadPhotos]);

  const goToPage = (page: number): void => {
    setCurrentPage(page);
  };

  return { photos, loading, error, currentPage, totalPages, goToPage };
}
