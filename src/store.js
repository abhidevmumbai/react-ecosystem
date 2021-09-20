import { creatStore, combineReducers } from "redux";

const reducers = {};

const rootReducer = combineReducers(reducers);

export const configureStore = () => creatStore(rootReducer);
