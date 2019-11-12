import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import filter from "./filter";
import todos from "./todos";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["todos"],
};

const rootReducer = combineReducers({ todos, filter });

export default persistReducer(persistConfig, rootReducer);
