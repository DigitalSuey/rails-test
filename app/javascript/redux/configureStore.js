import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

const initialState = {
  things: [
    {
      name: "test",
      guid: "1234"
    }
  ]
};

const rootReducer = (state, action) => {
  switch (action.type) {
    case "GET_THINGS_SUCCESS":
      return { things: action.json.things };
  }

  return state;
};

const configureStore = () => {
  const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
  return store;
};

export default configureStore;
