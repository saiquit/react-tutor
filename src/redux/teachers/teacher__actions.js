import { teacher__type } from "./teacher__types";

export const filtered_teachers = (items) => ({
  type: teacher__type.FILTERED_TEACHERS,
  payload: items,
});

export const noMoreData = (bool) => ({
  type: teacher__type.NO_MORE_DATA,
  payload: bool,
});
