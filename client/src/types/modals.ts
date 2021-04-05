export enum ModalsActionTypes {
  OPEN_MODAL = 'OPEN_MODAL',
  CLOCE_MODAL = 'CLOCE_MODAL',
}

interface ModalsAction {
  type: string;
}

interface OpenModalAction {
  type: ModalsActionTypes.OPEN_MODAL;
}
interface CloceModalAction {
  type: ModalsActionTypes.CLOCE_MODAL;
}

export type ModalAction = OpenModalAction | CloceModalAction;

export interface IModalReducer {
  isOpen: boolean;
}
