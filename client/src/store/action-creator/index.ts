import * as PostActionCreators from './posts';
import * as ModalActionCreators from './modal';
import * as AuthActionCreators from './auth';

export default {
  ...PostActionCreators,
  ...ModalActionCreators,
  ...AuthActionCreators,
};
