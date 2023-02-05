import { combineReducers } from "redux";

import Reducer from "./amountReducers";

const Reducers = combineReducers({
    amount: Reducer
})

export default Reducers