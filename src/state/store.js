import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers/index";
import thunk from "redux-thunk"


/// npm i redux-thunk becuasze u=you need it to call asynchrouns activites in the app
export const store = createStore(
    reducers,
    {}, applyMiddleware(thunk)
)