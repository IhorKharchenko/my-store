import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';
import {
  StyledGalleryLargeImage,
  StyledGalleryListImage,
  StyledGalleryListItem,
} from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };
  openModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };
  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    const { image } = this.props;
    return (
      <StyledGalleryListItem onClick={this.openModal}>
        <StyledGalleryListImage src={image.webformatURL} alt={image.tags} />
        {this.state.isModalOpen && (
          <Modal onClose={this.closeModal}>
            <StyledGalleryLargeImage src={image.largeImageURL} alt="" />
          </Modal>
        )}
      </StyledGalleryListItem>
    );
  }
}
