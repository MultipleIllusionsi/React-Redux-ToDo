import { SET_FILTER } from "../actionTypes";
import { FILTERS } from "../../constants";

const INITIAL_STATE = FILTERS.ALL;

const filter = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SET_FILTER: {
      return payload.filter;
    }
    default: {
      return state;
    }
  }
};

export default filter;
