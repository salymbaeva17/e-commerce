import React from 'react'
import {useDispatch, useSelector} from "react-redux"

const Cart = () => {
    const dispatch = useDispatch()
    const cart = useSelector(s => s.cart)
    return (
        <div className="container-fluid py-4">
            {
                cart.length ?
                    <>
                        <table className="table">
                            <thead>
                            <tr>
                                <th scope="col">№</th>
                                <th scope="col">Название</th>
                                <th scope="col">Цена</th>
                                <th scope="col">Количество</th>
                                <th scope="col">Сумма</th>
                                <th scope="col">Удалить</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                cart.map((item, idx) =>
                                    <tr>
                                        <th scope="row">{idx + 1}</th>
                                        <td>{item.title}</td>
                                        <td>{item.price}$</td>
                                        <td>
                                            <div className="d-flex align-items-center justify-content-between w-50">
                                                <button className="me-2 btn btn-sm btn-light border" onClick={() => dispatch({type: "DECREMENT_PRODUCT_QUANTITY", payload: item})}>-</button>
                                                <span>{item.quantity}</span>
                                                <button className="ms-2 btn btn-sm btn-light border" onClick={() => dispatch({type: "ADD_TO_CART", payload: item})}>+</button>
                                            </div>
                                        </td>
                                        <td>{(item.price*item.quantity).toFixed(2)}$</td>
                                        <td>

                                            <button className="btn btn-sm btn-danger fw-bolder"
                                                    onClick={() => dispatch({
                                                        type: "REMOVE_FROM_CART",
                                                        payload: item.id
                                                    })}>
                                                Удалить
                                            </button>
                                        </td>
                                    </tr>
                                )
                            }
                            </tbody>
                        </table>
                        <p className="container text-md-end fw-bold"><span className="me-5 pe-4">Итог: {
                            cart.reduce((acc, item) => {
                                    return (item.price * item.quantity) + acc
                                }, 0
                            ).toFixed(2)
                        }$</span></p>
                    </>
                    : <p className="text-center fw-700">Корзина пуста, добавьте товар</p>
            }
        </div>
    );
};

export default Cart;