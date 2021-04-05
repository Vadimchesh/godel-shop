import { ModalsActionTypes } from '../../types/modals';

export const openModal = () => {
  return { type: ModalsActionTypes.OPEN_MODAL };
};

export const closeModal = () => {
  return { type: ModalsActionTypes.CLOCE_MODAL };
};
