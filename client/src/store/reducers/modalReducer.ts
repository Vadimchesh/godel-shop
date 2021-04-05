import { ModalAction, ModalsActionTypes, IModalReducer } from '../../types/modals';

const initialState: IModalReducer = {
  isOpen: false,
};

export const modalReducer = (state = initialState, action: ModalAction): IModalReducer => {
  switch (action.type) {
    case ModalsActionTypes.OPEN_MODAL:
      return { ...state, isOpen: !state.isOpen };
    case ModalsActionTypes.CLOCE_MODAL:
      return { ...state, isOpen: !state.isOpen };
    default:
      return state;
  }
};
