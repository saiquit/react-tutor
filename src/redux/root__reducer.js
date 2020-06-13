import { combineReducers } from "redux";
import teachers__reducer from "./teachers/teacher__reducer";

const root__reducer = combineReducers({
  teachers: teachers__reducer,
});

export default root__reducer;
