import { PostAction, PostsActionTypes, IPostReducer } from '../../types/posts';

const initialState: IPostReducer = {
  posts: [],
  currentPost: [],
  formData: [],
  loading: false,
  error: null,
};

export const postReducer = (state = initialState, action: PostAction): IPostReducer => {
  switch (action.type) {
    case PostsActionTypes.FETCH_POSTS:
      return { ...state, posts: [] };
    case PostsActionTypes.FETCH_POSTS_ONE:
      return { ...state, currentPost: [action.payload] };
    case PostsActionTypes.SUCCESS_POST:
      return { ...state, posts: action.payload };
    case PostsActionTypes.POSTS_ERROR:
      return { ...state, error: action.payload };
    case PostsActionTypes.SAVE_POST:
      return { ...state, posts: [...state.posts.concat(action.payload)] };
    case PostsActionTypes.UPDATE_POST:
      return { ...state, formData: [action.payload] };
    case PostsActionTypes.DELETE_POST:
      return { ...state, posts: [...state.posts.filter(item => item._id !== action.payload)] };
    default:
      return state;
  }
};
