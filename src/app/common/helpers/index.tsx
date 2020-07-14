import { ACCESS_TOKEN } from 'app/common/constants';

export const getAccessTokenFromStorage = () => {
  return localStorage.getItem(ACCESS_TOKEN);
};
