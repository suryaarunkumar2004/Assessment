import { useAppContext } from "../../context/AppContext";
import { useFetchPhotos } from "../../hooks/useFetchPhotos";
import PhotoCard from "../../components/PhotoCard/PhotoCard";
import Pagination from "../../components/Pagination/Pagination";
import {
  DetailsWrapper,
  PageHeader,
  Greeting,
  GridArea,
  PhotoGrid,
  LoadingText,
  ErrorText,
  EmptyText,
} from "./Details.styles";

function Details() {
  const { userName, toggleSavePhoto, isPhotoSaved } = useAppContext();
  const { photos, loading, error, currentPage, totalPages, goToPage } = useFetchPhotos();

  const displayName = userName || "Guest";

  return (
    <DetailsWrapper>
      <PageHeader>
        <Greeting>
          Welcome, <span>{displayName}</span> 👋
        </Greeting>
        <p style={{ color: "var(--color-text-muted)", fontSize: "0.92rem" }}>
          Check the box on any photo to save it to your collection.
        </p>
      </PageHeader>

      <GridArea>
        {loading && <LoadingText>Loading photos...</LoadingText>}
        {error && <ErrorText>{error}</ErrorText>}
        {!loading && !error && photos.length === 0 && (
          <EmptyText>No photos found.</EmptyText>
        )}
        {!loading && !error && (
          <PhotoGrid>
            {photos.map((photo) => (
              <PhotoCard
                key={photo.id}
                photo={photo}
                showCheckbox={true}
                isChecked={isPhotoSaved(photo.id)}
                onToggle={toggleSavePhoto}
              />
            ))}
          </PhotoGrid>
        )}
      </GridArea>

      {!loading && !error && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={goToPage}
        />
      )}
    </DetailsWrapper>
  );
}

export default Details;
