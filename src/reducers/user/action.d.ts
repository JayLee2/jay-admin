import * as Types from './actionTypes';

type ChangeName = {
  type: typeof Types.CHANGE_NAME;
};

type InitName = {
  type: typeof Types.INIT_NAME;
};

export type ActionsType = ChangeName | InitName;
