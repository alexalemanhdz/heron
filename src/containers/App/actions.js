import { UPDATE_QUERY, INIT_SUGGESTIONS_FETCH, UPDATE_SUGGESTIONS } from './constants';

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

export function updateSuggestions(suggestions) {
  return {
    type: UPDATE_SUGGESTIONS,
    suggestions,
  };
}
