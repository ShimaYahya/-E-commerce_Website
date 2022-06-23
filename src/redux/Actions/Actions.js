import {ActionsTypes} from "./ActionsTypes"

export const setProducts = (products) => {
    return {
        type: ActionsTypes.SET_PRODUCTS,
        payload: products,
    };
};

export const selectedProduct = (product) => {
    return {
        type: ActionsTypes.SELECTED_PRODUCT,
        payload: product,
    };
};

export const addToCart = (id) => {
    return {
        type: ActionsTypes.ADD_TO_CART,
        payload: id,
    }
};

export const removeFromCart = (id) => {
    return {
        type: ActionsTypes.REMOVE_FROM_CART,
        payload: id,
    }
};
