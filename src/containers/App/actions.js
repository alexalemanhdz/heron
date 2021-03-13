import { UPDATE_QUERY, UPDATE_SUGGESTIONS } from './constants';

export function updateQuery(query) {
  return {
    type: UPDATE_QUERY,
    query,
  };
}

export function updateSuggestions(suggestions) {
  return {
    type: UPDATE_SUGGESTIONS,
    suggestions,
  };
}
