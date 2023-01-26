import { createStore } from "redux";
import accountsReducer from "./accounts/accountsReducer";

const store = createStore(accountsReducer);

export default store;