import { createContext, useContext, useState, ReactNode } from "react";
import { Photo, AppContextType } from "../types";

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [userName, setUserName] = useState<string>("");
  const [savedPhotos, setSavedPhotos] = useState<Photo[]>([]);

  const toggleSavePhoto = (photo: Photo): void => {
    setSavedPhotos((prev) => {
      const alreadySaved = prev.find((p) => p.id === photo.id);
      if (alreadySaved) {
        return prev.filter((p) => p.id !== photo.id);
      }
      return [...prev, photo];
    });
  };

  const isPhotoSaved = (id: string): boolean => {
    return savedPhotos.some((p) => p.id === id);
  };

  return (
    <AppContext.Provider
      value={{ userName, setUserName, savedPhotos, toggleSavePhoto, isPhotoSaved }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext(): AppContextType {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within AppProvider");
  }
  return context;
}
