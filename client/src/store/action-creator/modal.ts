import { ModalAction, ModalsActionTypes } from '../../types/modals';
import { Dispatch } from 'redux';

export const openModal = () => {
  return (dispatch: Dispatch<ModalAction>) => {
    dispatch({ type: ModalsActionTypes.OPEN_MODAL });
  };
};
export const closeModal = () => {
  return (dispatch: Dispatch<ModalAction>) => {
    dispatch({ type: ModalsActionTypes.CLOCE_MODAL });
  };
};
