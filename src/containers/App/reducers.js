import {
  UPDATE_START_QUERY,
  UPDATE_START_SUGGESTIONS,
  UPDATE_END_QUERY,
  UPDATE_END_SUGGESTIONS,
} from './constants';

export const initialState = {
  startQuery: '',
  startSuggestions: [],
  endQuery: '',
  endSuggestions: [],
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
    default:
      return state;
  }
};

export default appReducer;
