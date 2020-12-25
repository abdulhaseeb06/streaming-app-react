import { applyMiddleware, createStore } from "redux";
import rootReducer from "../src/reducers/index";
import reduxthnk from "redux-thunk";
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer, applyMiddleware(reduxthnk));
export default store;
