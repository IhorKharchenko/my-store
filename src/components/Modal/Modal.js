import React, { Component } from 'react';
import * as SM from './Modal.styled';

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
    return (
      <SM.StyledBackdrop onClick={this.handleBackdropClick}>
        <SM.StyledContent>{this.props.children}</SM.StyledContent>
      </SM.StyledBackdrop>
    );
  }
}
