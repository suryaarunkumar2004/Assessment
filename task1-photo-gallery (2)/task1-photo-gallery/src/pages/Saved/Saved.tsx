import { useAppContext } from "../../context/AppContext";
import PhotoCard from "../../components/PhotoCard/PhotoCard";
import {
  SavedWrapper,
  PageHeader,
  SavedTitle,
  SavedMessage,
  PhotoGrid,
  EmptyState,
  EmptyIcon,
  EmptyText,
  EmptySub,
} from "./Saved.styles";

function Saved() {
  const { userName, savedPhotos, toggleSavePhoto, isPhotoSaved } = useAppContext();

  const displayName = userName || "Friend";
  const count = savedPhotos.length;

  return (
    <SavedWrapper>
      <PageHeader>
        <SavedTitle>
          Hey <span>{displayName}</span>, your collection
        </SavedTitle>
        <SavedMessage>
          {count > 0
            ? `You've saved ${count} ${count === 1 ? "image" : "images"} so far. Great taste!`
            : "You haven't saved any images yet. Go explore the gallery!"}
        </SavedMessage>
      </PageHeader>

      {count === 0 ? (
        <EmptyState>
          <EmptyIcon>🖼️</EmptyIcon>
          <EmptyText>No saved photos yet</EmptyText>
          <EmptySub>
            Head to the <strong>Details</strong> page and check the box on any photo to save it here.
          </EmptySub>
        </EmptyState>
      ) : (
        <PhotoGrid>
          {savedPhotos.map((photo) => (
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
    </SavedWrapper>
  );
}

export default Saved;
