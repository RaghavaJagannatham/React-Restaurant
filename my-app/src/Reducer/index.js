import { combineReducers } from "redux";
import Tablereducer from "./Tablereducer";
import filterreducer from './filterreducer'

const reducer = combineReducers({
    Tablereducer:Tablereducer,
    filterreducer : filterreducer
})

export default reducer;