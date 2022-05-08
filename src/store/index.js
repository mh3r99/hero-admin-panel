import { createStore, combineReducers } from "redux";
import filters from "../reducers/filters";
import heroes from "../reducers/heroes";

const store = createStore(
  combineReducers({
    heroes,
    filters,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
