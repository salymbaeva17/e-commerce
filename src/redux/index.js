import {createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension';

const initialState = {
    catalog: [],
    cart: []
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_CATALOG":
            return {...state, catalog: action.payload}
        case "ADD_TO_CART":
            const findProduct = state.cart.find(item => item.id === action.payload.id)
            if (findProduct) {
                return {...state,
                    cart: state.cart.map(item => item.id === findProduct.id ? {
                        ...findProduct,
                        quantity: findProduct.quantity + 1
                    } : item)
                }
            }
            return {...state, cart: [...state.cart, {...action.payload, quantity: 1}]}
        case "REMOVE_FROM_CART":
            return {...state, cart: state.cart.filter(el => el.id !== action.payload)}

        case "DECREMENT_PRODUCT_QUANTITY":
            const object = state.cart.find(item => item.id === action.payload.id)
            if (object.quantity > 1) {
                return {
                    ...state,
                    cart: state.cart.map(item => item.id === object.id ?
                        {...object, quantity: object.quantity - 1}
                        : item)
                }
            }
        default:
            return state
    }
}


export const store = createStore(reducer, composeWithDevTools())