import { Photo } from "../../types";
import {
  CardWrapper,
  CardImage,
  CardInfo,
  CardTitle,
  CheckboxWrapper,
  StyledCheckbox,
  Checkmark,
} from "./PhotoCard.styles";

interface PhotoCardProps {
  photo: Photo;
  showCheckbox?: boolean;
  isChecked?: boolean;
  onToggle?: (photo: Photo) => void;
}

function PhotoCard({ photo, showCheckbox = false, isChecked = false, onToggle }: PhotoCardProps) {
  const handleChange = () => {
    if (onToggle) onToggle(photo);
  };

  return (
    <CardWrapper $checked={isChecked}>
      <CardImage
        src={`https://picsum.photos/id/${photo.id}/300/200`}
        alt={photo.author}
        loading="lazy"
      />
      <CardInfo>
        <CardTitle>{photo.author}</CardTitle>
        {showCheckbox && (
          <CheckboxWrapper onClick={handleChange}>
            <StyledCheckbox type="checkbox" checked={isChecked} onChange={handleChange} />
            <Checkmark $checked={isChecked}>
              {isChecked ? "✓ Saved" : "Save"}
            </Checkmark>
          </CheckboxWrapper>
        )}
      </CardInfo>
    </CardWrapper>
  );
}

export default PhotoCard;
