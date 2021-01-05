import React, {createContext, useContext, useReducer} from 'react';

function createStore(reducer, initialState) {
  const StateContext = createContext(initialState);
  const DispatchContext = createContext();

  function getState() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useContext(StateContext);
  }

  function getDispatch() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useContext(DispatchContext);
  }

  function StateProvider({children}) {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
      <StateContext.Provider value={state}>
        <DispatchContext.Provider value={dispatch}>
          {children}
        </DispatchContext.Provider>
      </StateContext.Provider>
    );
  }
  return {getState, getDispatch, StateProvider};
}

export default createStore;
