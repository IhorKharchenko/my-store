/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import * as SM from './Modal.styled';

export const Modal = ({ onClose, children }) => {
  const handleBackdropClick = event => {
    console.log(event.currentTarget);
    console.log(event.target);
    if (event.target === event.currentTarget) {
      console.log('Таргети рівні');
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
    <SM.StyledBackdrop onClick={handleBackdropClick}>
      <SM.StyledContent>{children}</SM.StyledContent>
    </SM.StyledBackdrop>
  );
};

// class OldModal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyDown);
//   }
//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyDown);
//   }

//   handleKeyDown = event => {
//     if (event.code === 'Escape') {
//       this.props.onClose();
//     }
//   };
//   handleBackdropClick = event => {
//     if (event.currentTarget === event.target) {
//       this.props.onClose();
//     }
//   };
//   render() {
//     return (
//       <SM.StyledBackdrop onClick={this.handleBackdropClick}>
//         <SM.StyledContent>{this.props.children}</SM.StyledContent>
//       </SM.StyledBackdrop>
//     );
//   }
// }
