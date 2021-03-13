import { UPDATE_QUERY, UPDATE_SUGGESTIONS } from './constants';

export const initialState = {
  query: '',
  suggestions: [],
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_QUERY:
      return {
        ...state,
        query: action.query,
      };
    case UPDATE_SUGGESTIONS:
      return {
        ...state,
        suggestions: action.suggestions,
      };
    default:
      return state;
  }
};

export default appReducer;
