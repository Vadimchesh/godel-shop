import * as PostActionCreators from './posts';
import * as ModalActionCreators from './modal';

export default {
  ...PostActionCreators,
  ...ModalActionCreators,
};
