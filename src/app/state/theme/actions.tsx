import { TOGGLE_THEME } from './types';

export const toggleTheme = (payload: string) => ({
  type: TOGGLE_THEME,
  payload,
});
