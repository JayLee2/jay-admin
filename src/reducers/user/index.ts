import { ActionsType } from './action';
import React from 'react';
import * as Types from './actionTypes';

interface StateType {
  userName: string;
  account: string;
}
export type userReducerType = React.Reducer<StateType, ActionsType>;

export const userState: StateType = {
  userName: 'liwenjie',
  account: '447047479',
};

export const userReducer: userReducerType = (state, action) => {
  switch (action.type) {
    case Types.CHANGE_NAME:
      return { ...state, userName: 'jayLee' };
    case Types.INIT_NAME:
      return { ...state, userName: 'liwenjie' };
    default:
  }
};
