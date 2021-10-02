import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {ADD_TO_CART, GET_CATALOG} from "../../redux/actions";

const Home = () => {
    const dispatch = useDispatch()
    // dispatch создает новый action  и отправляет его в редюсер
    const catalog = useSelector(s => s.catalog)
    //useSelector это хук который получает наш store or s
    const isLoading = useSelector(s => s.isLoading)
    useEffect(() => {
        dispatch(GET_CATALOG())
    }, [dispatch])
    if (isLoading) {
        return (
            <div className="container-fluid py-4">
                <div className="my-5 py-5 d-flex align-items-center justify-content-center">
                    <div className="spring-spinner">
                        <div className="spring-spinner-part top">
                            <div className="spring-spinner-rotator"/>
                        </div>
                        <div className="spring-spinner-part bottom">
                            <div className="spring-spinner-rotator"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="container-fluid py-4">
            <div className="row">
                {
                    catalog.map(product =>
                        <div key={product.id} className="col-md-3 mb-4">
                            <div className="card" style={{height: "450px"}}>
                                <img src={product.images} alt=""
                                     style={{width: "100%", height: "240px", objectFit: "cover"}}/>
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text">{product.price}$</p>
                                    <button className="btn btn-primary" onClick={() => dispatch(ADD_TO_CART(product))}>В
                                        корзину
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
            </div>
        </div>
    );
};

export default Home;