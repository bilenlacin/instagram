import {
  FETCH_POST_ARRAY,
  FETCH_POST_COMPLETE,
  FETCH_POST_ERROR,
} from '../action-types';

const initialState = { posts: [] };

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POST_ARRAY:
      return { posts: [] };
    case FETCH_POST_COMPLETE:
      return { posts: action.payload };
    default:
      return state;
  }
};

export default postReducer;
