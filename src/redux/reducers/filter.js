import { SET_FILTER } from "../actionTypes";
import { FILTERS } from "../../constants";

const initialState = FILTERS.ALL;

const filter = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER: {
      return action.payload.filter;
    }
    default: {
      return state;
    }
  }
};

export default filter;
