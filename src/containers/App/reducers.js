import {
  UPDATE_START_QUERY,
  UPDATE_START_SUGGESTIONS,
  UPDATE_END_QUERY,
  UPDATE_END_SUGGESTIONS,
  SELECT_START_POINT,
  SELECT_END_POINT,
} from './constants';

export const initialState = {
  startQuery: '',
  startSuggestions: [],
  endQuery: '',
  endSuggestions: [],
  startPoint: {},
  endPoint: {},
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_START_QUERY:
      return {
        ...state,
        startQuery: action.query,
      };
    case UPDATE_START_SUGGESTIONS:
      return {
        ...state,
        startSuggestions: action.suggestions,
      };
    case UPDATE_END_QUERY:
      return {
        ...state,
        endQuery: action.query,
      };
    case UPDATE_END_SUGGESTIONS:
      return {
        ...state,
        endSuggestions: action.suggestions,
      };
    case SELECT_START_POINT:
      return {
        ...state,
        startPoint: action.point,
      };
    case SELECT_END_POINT:
      return {
        ...state,
        endPoint: action.point,
      };
    default:
      return state;
  }
};

export default appReducer;
