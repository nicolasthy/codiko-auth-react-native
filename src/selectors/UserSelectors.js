import { get, size } from 'lodash';

export const getCurrentUser = (state) => {
  return get(state, 'currentUser.data.attributes');
};
