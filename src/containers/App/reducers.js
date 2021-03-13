import { UPDATE_QUERY, INIT_SUGGESTIONS_FETCH } from './constants';

export const initialState = {
  query: '',
  suggestions: '',
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_QUERY:
      return {
        ...state,
        query: action.query,
      };
    case INIT_SUGGESTIONS_FETCH:
      return {
        ...state,
        suggestions: action.suggestions,
      };
    default:
      return state;
  }
};

export default appReducer;
