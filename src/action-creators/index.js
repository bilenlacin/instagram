import axios from 'axios';
import { bindActionCreators } from 'redux';
import {
  FETCH_POST_ARRAY,
  FETCH_POST_COMPLETE,
  FETCH_POST_ERROR,
  FETCH_STORY_COMPLETE,
  FETCH_STORY_ERROR,
  FETCH_STORY_ARRAY,
} from '../action-types';

export const fetchPosts = () => {
  return async (dispatch) => {
    //dispatch({ type: FETCH_POST_ARRAY });
    axios
      .get('https://6115020faec65d0017e9dc5e.mockapi.io/instagram')
      .then((response) => {
        dispatch({
          type: FETCH_POST_COMPLETE,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_POST_ERROR,
          payload: error,
        });
      });
  };
};

export const fetchStory = () => {
  return async (dispatch) => {
    //dispatch({ type: FETCH_STORY_ARRAY });
    axios
      .get('https://6115020faec65d0017e9dc5e.mockapi.io/story')
      .then((response) => {
        dispatch({ type: FETCH_STORY_COMPLETE, payload: response.data });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_STORY_ERROR,
          payload: error,
        });
      });
  };
};
