import { UPDATE_QUERY } from './constants';

export function updateQuery(query) {
  return {
    type: UPDATE_QUERY,
    query,
  };
}
