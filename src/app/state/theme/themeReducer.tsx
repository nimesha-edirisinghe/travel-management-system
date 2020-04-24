import { DARK } from 'app/common/constants';
import { TOGGLE_THEME } from './types';

const initialState = {
  themeName: DARK,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        themeName: action.payload,
      };
    default:
      return state;
  }
};
