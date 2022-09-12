/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import * as SM from './Modal.styled';

export const Modal = ({ onClose, children }) => {
  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };
  const handleKeyDown = event => {
    if (event.code === 'Escape') {
      onClose();
    }
  };
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <SM.StyledBackdrop onClick={event => handleBackdropClick(event)}>
      <SM.StyledContent>{children}</SM.StyledContent>
    </SM.StyledBackdrop>
  );
};
