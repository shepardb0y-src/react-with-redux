import { combineReducers } from "redux";
import accountReducer from './acoountReducer'

const reducers = combineReducers({
    account:accountReducer
})
export default reducers;