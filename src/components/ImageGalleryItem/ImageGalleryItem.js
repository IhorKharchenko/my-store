import {
  StyledGalleryListImage,
  StyledGalleryListItem,
} from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ image }) => {
  return (
    <StyledGalleryListItem>
      <StyledGalleryListImage src={image.webformatURL} alt={image.tags} />
    </StyledGalleryListItem>
  );
};
