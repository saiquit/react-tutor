import { tData } from "../../tData";
import { teacher__type } from "./teacher__types";
const initialState = {
  teachers: tData,
  filteredTeachers: [],
  noData: false,
};

const teacher__reducer = (state = initialState, action) => {
  switch (action.type) {
    case teacher__type.FILTERED_TEACHERS:
      return {
        ...state,
        filteredTeachers: action.payload,
      };
    case teacher__type.NO_MORE_DATA:
      return {
        ...state,
        noData: action.payload,
      };
    default:
      return state;
  }
};
export default teacher__reducer;
