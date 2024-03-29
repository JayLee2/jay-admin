export function combineReducers<T>(reducers: { [propName: string]: (...props) => T }) {
  return function (state = {}, action) {
    const newState = {};
    Object.keys(reducers).forEach((key) => {
      const childState = state[key];
      newState[key] = reducers[key](childState, action);
    });
    return newState;
  };
}
