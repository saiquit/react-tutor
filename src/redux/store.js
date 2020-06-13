import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import root__reducer from "./root__reducer";

const middleWare = [thunk];

if (process.env.NODE_ENV === "development") {
  middleWare.push(logger);
}

const store = createStore(root__reducer, applyMiddleware(...middleWare));

export default store;
