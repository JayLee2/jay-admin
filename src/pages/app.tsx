import React, { useReducer } from 'react';
import Router from '@/router';
import AppContext from '@/context';
import { store, reducers } from '@/reducers';

export default () => {
  const [state, dispatch] = useReducer(reducers, store);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <Router />
    </AppContext.Provider>
  );
};
