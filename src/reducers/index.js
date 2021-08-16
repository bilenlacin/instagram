import { combineReducers } from 'redux';
import postReducer from './postReducer';
import storyReducer from './storyReducer';

const reducers = combineReducers({
  postReducer,
  storyReducer,
});

export default reducers;
