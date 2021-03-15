import {
  UPDATE_START_QUERY,
  UPDATE_START_SUGGESTIONS,
  UPDATE_END_QUERY,
  UPDATE_END_SUGGESTIONS,
  SELECT_START_POINT,
  SELECT_END_POINT,
} from './constants';

export function updateStartQuery(query) {
  return {
    type: UPDATE_START_QUERY,
    query,
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

export function updateEndSuggestions(suggestions) {
  return {
    type: UPDATE_END_SUGGESTIONS,
    suggestions,
  };
}

export function selectStartPoint(point) {
  return {
    type: SELECT_START_POINT,
    point,
  };
}

export function selectEndPoint(point) {
  return {
    type: SELECT_END_POINT,
    point,
  };
}
