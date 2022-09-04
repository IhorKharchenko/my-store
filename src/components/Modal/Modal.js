import React, { Component } from 'react';
import * as SM from './Modal.styled';
import { createPortal } from 'react-dom';
// import { StyledBackdrop, StyledContent } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };
  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };
  render() {
    return createPortal(
      <SM.StyledBackdrop onClick={this.handleBackdropClick}>
        <SM.StyledContent>{this.props.children}</SM.StyledContent>
      </SM.StyledBackdrop>,
      modalRoot
    );
  }
}
