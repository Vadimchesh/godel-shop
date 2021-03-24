import React, { FC, useEffect, useCallback, ReactElement } from 'react';
import { createPortal } from 'react-dom';
import styles from './styles.module.css';

const modalElement = document.getElementById('modal-root');

interface IModalProps {
  isOpen: Boolean;
  onClose: () => void;
  children: string | ReactElement;
}
const Modal: FC<IModalProps> = ({ isOpen, onClose, children }) => {
  const handleEscape = useCallback(
    (event) => {
      if (event.keyCode === 27) onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) document.addEventListener('keydown', handleEscape, false);
    return () => {
      document.removeEventListener('keydown', handleEscape, false);
    };
  }, [handleEscape, isOpen]);

  return (
    modalElement &&
    createPortal(
      isOpen ? (
        <div className={styles.modal}>
          <div className='modalOverlay' onClick={onClose} />
          <span
            role='button'
            className={styles.modalClose}
            aria-label='close'
            onClick={onClose}
          >
            x
          </span>
          <div className={styles.modalBody}>{children}</div>
        </div>
      ) : null,
      modalElement
    )
  );
};

export default Modal;
