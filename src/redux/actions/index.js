import axios from "axios";

export const GET_CATALOG = () => {
    return (dispatch) => {
        dispatch({type: "GET_CATALOG_LOADING"})
        axios(`https://61530f5bc465200017d1a969.mockapi.io/catalog`)
            .then(({data}) => {
                return dispatch({type: "GET_CATALOG", payload: data})
            })
    }

}

export const ADD_TO_CART = (product) => {
    return {type: "ADD_TO_CART", payload: product}
}
export const DECREASE_QUANTITY = (idx)=>{
    return {type: "DECREASE_QUANTITY", payload: idx}
}
export const REMOVE_FROM_CART = (id) => {
return {type: "REMOVE_FROM_CART", payload: id}
}