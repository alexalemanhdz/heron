import { UPDATE_QUERY, INIT_SUGGESTIONS_FETCH } from './constants';

export function updateQuery(query) {
  return {
    type: UPDATE_QUERY,
    query,
  };
}

export function initSuggestionsFetch() {
  return {
    type: INIT_SUGGESTIONS_FETCH,
  };
}
