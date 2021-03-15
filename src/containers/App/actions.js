import {
  UPDATE_START_QUERY,
  INIT_START_SUGGESTIONS_FETCH,
  UPDATE_START_SUGGESTIONS,
  UPDATE_END_QUERY,
  INIT_END_SUGGESTIONS_FETCH,
  UPDATE_END_SUGGESTIONS,
} from './constants';

export function updateStartQuery(query) {
  return {
    type: UPDATE_START_QUERY,
    query,
  };
}

export function initStartSuggestionsFetch() {
  return {
    type: INIT_START_SUGGESTIONS_FETCH,
  };
}

export function updateStartSuggestions(suggestions) {
  return {
    type: UPDATE_START_SUGGESTIONS,
    suggestions,
  };
}

export function updateEndQuery(query) {
  return {
    type: UPDATE_END_QUERY,
    query,
  };
}

export function initEndSuggestionsFetch() {
  return {
    type: INIT_END_SUGGESTIONS_FETCH,
  };
}

export function updateEndSuggestions(suggestions) {
  return {
    type: UPDATE_END_SUGGESTIONS,
    suggestions,
  };
}
