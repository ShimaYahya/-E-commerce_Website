import { ActionsTypes } from "../Actions/ActionsTypes"

const initialState = {
    products: [],
    addOnePToCart: [],
};

export const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionsTypes.SET_PRODUCTS:
            return { ...state, products: action.payload };
        default:
            return state;
    }
};


export const selecteProductReducer = (state = {}, action) => {
    switch (action.type) {
        case ActionsTypes.SELECTED_PRODUCT:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};

export const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionsTypes.ADD_TO_CART:
            return {
                ...state,
                addOnePToCart: [...state.addOnePToCart, action.payload]
            };
        case ActionsTypes.REMOVE_FROM_CART:
            return {
                ...state,
                addOnePToCart: [...state.addOnePToCart.filter((id) => id !== action.payload)]
            };
        default:
            return state;
    }
};