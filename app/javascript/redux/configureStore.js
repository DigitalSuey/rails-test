import { createStore } from "redux";

const initialState = {
  things: []
};

const rootReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const configureStore = () => {
  const store = createStore(rootReducer, initialState);
  return store;
};

export default configureStore;
