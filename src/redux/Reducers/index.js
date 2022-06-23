import { combineReducers } from "redux";
import {ProductReducer, selecteProductReducer, CartReducer} from "./Reducers";

const reducers = combineReducers ({
    allProducts: ProductReducer,
    product: selecteProductReducer,
    cart: CartReducer,
});

export default reducers;