import { combineReducers } from 'redux';
import { modalReducer } from './modalReducer';
import { postReducer } from './postReducer';

export const rootReducer = combineReducers({ posts: postReducer, modal: modalReducer });

export type RootState = ReturnType<typeof rootReducer>;
