import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { StyledGalleryList } from './ImageGallery.styled';

export const ImageGallery = ({ images }) => {
  return (
    <StyledGalleryList>
      {images.map(
        image => (
          <ImageGalleryItem key={image.id} image={image} />
          //   <li key={image.id}>
          //     <img src={image.webformatURL} alt="" />
          //   </li>
        )
        // console.table(image)
      )}
    </StyledGalleryList>
  );
};
