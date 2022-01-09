import { combineReducers } from './utils';
import { userState, userReducer } from './user';

export const store = {
  user: userState,
};

export const reducers = combineReducers({
  user: userReducer,
});
