import { combineReducers } from 'redux';
import { modalReducer } from './modalReducer';
import { postReducer } from './postReducer';
import { authReducer } from './authReducer';

export const rootReducer = combineReducers({ posts: postReducer, modal: modalReducer, auth: authReducer });

export type RootState = ReturnType<typeof rootReducer>;
