import { UPDATE_QUERY } from './constants';

export const initialState = {
  query: '',
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_QUERY:
      return {
        ...state,
        query: action.query,
      };
    default:
      return state;
  }
};

export default appReducer;
