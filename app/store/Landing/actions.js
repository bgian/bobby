import { CHANGE_EMAIL } from './constants';

export const updateEmail = (email) => ({
  type: CHANGE_EMAIL,
  email
});
