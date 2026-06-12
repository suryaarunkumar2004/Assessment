export interface Photo {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

export interface AppContextType {
  userName: string;
  setUserName: (name: string) => void;
  savedPhotos: Photo[];
  toggleSavePhoto: (photo: Photo) => void;
  isPhotoSaved: (id: string) => boolean;
}
