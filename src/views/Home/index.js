import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

const Home = () => {
    const dispatch = useDispatch()
    // dispatch создает новый action  и отправляет его в редюсер
    const data = [
        {
            "id": 1,
            "title": "Cheese - Mozzarella, Buffalo",
            "price": "7.75",
            "description": "Maxillary hypoplasia",
            "amount": 1,
            "images": "http://dummyimage.com/225x100.png/ff4444/ffffff"
        },
        {
            "id": 2,
            "title": "Cloves - Ground",
            "price": "9.77",
            "description": "Fall into swimming pool striking wall causing drown, subs",
            "amount": 2,
            "images": "http://dummyimage.com/206x100.png/5fa2dd/ffffff"
        },
        {
            "id": 3,
            "title": "Muffin - Mix - Bran And Maple 15l",
            "price": "1.37",
            "description": "Maternal care for compound presentation, fetus 5",
            "amount": 3,
            "images": "http://dummyimage.com/111x100.png/cc0000/ffffff"
        },
        {
            "id": 4,
            "title": "Leeks - Baby, White",
            "price": "8.58",
            "description": "Retained (old) magnetic fb in ant chamber, bilateral",
            "amount": 4,
            "images": "http://dummyimage.com/234x100.png/5fa2dd/ffffff"
        },
        {
            "id": 5,
            "title": "Tea - Honey Green Tea",
            "price": "6.52",
            "description": "Heat syncope, initial encounter",
            "amount": 5,
            "images": "http://dummyimage.com/196x100.png/dddddd/000000"
        },
        {
            "id": 6,
            "title": "Flour - Corn, Fine",
            "price": "3.88",
            "description": "Oth parlyt syndrome fol oth ntrm intcrn hemor aff unsp side",
            "amount": 6,
            "images": "http://dummyimage.com/169x100.png/dddddd/000000"
        },
        {
            "id": 7,
            "title": "Longan",
            "price": "5.21",
            "description": "Pnctr w/o fb of l rng fngr w damage to nail, sequela",
            "amount": 7,
            "images": "http://dummyimage.com/242x100.png/dddddd/000000"
        },
        {
            "id": 8,
            "title": "Island Oasis - Sweet And Sour Mix",
            "price": "9.27",
            "description": "Retinal detachments and breaks",
            "amount": 8,
            "images": "http://dummyimage.com/111x100.png/ff4444/ffffff"
        },
        {
            "id": 9,
            "title": "Sprouts - Bean",
            "price": "4.12",
            "description": "Other measles complications",
            "amount": 9,
            "images": "http://dummyimage.com/201x100.png/dddddd/000000"
        },
        {
            "id": 10,
            "title": "Flour - Whole Wheat",
            "price": "9.00",
            "description": "Adult T-cell lymph/leuk (HTLV-1-assoc) not achieve remission",
            "amount": 10,
            "images": "http://dummyimage.com/230x100.png/5fa2dd/ffffff"
        },
        {
            "id": 11,
            "title": "Lemonade - Black Cherry, 591 Ml",
            "price": "5.97",
            "description": "Unsp fracture of fourth metacarpal bone, right hand, sequela",
            "amount": 11,
            "images": "http://dummyimage.com/154x100.png/dddddd/000000"
        },
        {
            "id": 12,
            "title": "Sobe - Liz Blizz",
            "price": "8.48",
            "description": "Toxic effect of unsp gases, fumes and vapors, acc, init",
            "amount": 12,
            "images": "http://dummyimage.com/167x100.png/cc0000/ffffff"
        },
        {
            "id": 13,
            "title": "Apple - Granny Smith",
            "price": "1.25",
            "description": "Displ seg fx shaft of r tibia, 7thJ",
            "amount": 13,
            "images": "http://dummyimage.com/115x100.png/5fa2dd/ffffff"
        },
        {
            "id": 14,
            "title": "Pur Value",
            "price": "8.08",
            "description": "Failed induction of labor",
            "amount": 14,
            "images": "http://dummyimage.com/121x100.png/cc0000/ffffff"
        },
        {
            "id": 15,
            "title": "Lid Coffeecup 12oz D9542b",
            "price": "9.41",
            "description": "Other specified bursopathies, elbow",
            "amount": 15,
            "images": "http://dummyimage.com/194x100.png/cc0000/ffffff"
        },
        {
            "id": 16,
            "title": "Rabbit - Legs",
            "price": "1.27",
            "description": "Poisoning by unspecified narcotics, assault, sequela",
            "amount": 16,
            "images": "http://dummyimage.com/181x100.png/dddddd/000000"
        },
        {
            "id": 17,
            "title": "Ecolab Crystal Fusion",
            "price": "1.32",
            "description": "Abrasion, left knee, sequela",
            "amount": 17,
            "images": "http://dummyimage.com/167x100.png/ff4444/ffffff"
        },
        {
            "id": 18,
            "title": "Chicken - Thigh, Bone In",
            "price": "5.58",
            "description": "Inj extensor musc/fasc/tend unsp finger at forearm level",
            "amount": 18,
            "images": "http://dummyimage.com/127x100.png/5fa2dd/ffffff"
        },
        {
            "id": 19,
            "title": "Mackerel Whole Fresh",
            "price": "3.53",
            "description": "Cutaneous listeriosis",
            "amount": 19,
            "images": "http://dummyimage.com/166x100.png/ff4444/ffffff"
        },
        {
            "id": 20,
            "title": "Wine - Red, Mosaic Zweigelt",
            "price": "8.28",
            "description": "Patient's noncompliance with dietary regimen",
            "amount": 20,
            "images": "http://dummyimage.com/197x100.png/ff4444/ffffff"
        },
        {
            "id": 21,
            "title": "English Muffin",
            "price": "8.71",
            "description": "Displ seg fx shaft of humer, r arm, subs for fx w delay heal",
            "amount": 21,
            "images": "http://dummyimage.com/212x100.png/cc0000/ffffff"
        },
        {
            "id": 22,
            "title": "Eel Fresh",
            "price": "3.05",
            "description": "Osteitis deformans in neoplastic diseases, unsp lower leg",
            "amount": 22,
            "images": "http://dummyimage.com/109x100.png/ff4444/ffffff"
        },
        {
            "id": 23,
            "title": "Bols Melon Liqueur",
            "price": "3.24",
            "description": "Advrs effect of pertuss vaccine, inc combin w pertuss, subs",
            "amount": 23,
            "images": "http://dummyimage.com/171x100.png/ff4444/ffffff"
        },
        {
            "id": 24,
            "title": "Ecolab - Medallion",
            "price": "3.21",
            "description": "Myopia",
            "amount": 24,
            "images": "http://dummyimage.com/213x100.png/ff4444/ffffff"
        },
        {
            "id": 25,
            "title": "Eel Fresh",
            "price": "1.98",
            "description": "Lacerat flexor musc/fasc/tend l idx fngr at wrs/hnd lv, sqla",
            "amount": 25,
            "images": "http://dummyimage.com/190x100.png/ff4444/ffffff"
        },
        {
            "id": 26,
            "title": "Chilli Paste, Hot Sambal Oelek",
            "price": "1.08",
            "description": "Person injured in collision betw rail trn/veh and car",
            "amount": 26,
            "images": "http://dummyimage.com/212x100.png/5fa2dd/ffffff"
        },
        {
            "id": 27,
            "title": "Sprouts - Alfalfa",
            "price": "8.30",
            "description": "Frostbite with tissue necrosis of knee and lower leg",
            "amount": 27,
            "images": "http://dummyimage.com/235x100.png/dddddd/000000"
        },
        {
            "id": 28,
            "title": "Juice - Ocean Spray Kiwi",
            "price": "2.05",
            "description": "Maternal care for anti-D antibodies, second tri, fetus 1",
            "amount": 28,
            "images": "http://dummyimage.com/223x100.png/5fa2dd/ffffff"
        },
        {
            "id": 29,
            "title": "Onions - Cippolini",
            "price": "2.37",
            "description": "Nondisp segmental fracture of shaft of ulna, left arm, init",
            "amount": 29,
            "images": "http://dummyimage.com/248x100.png/dddddd/000000"
        },
        {
            "id": 30,
            "title": "Wine - Magnotta - Pinot Gris Sr",
            "price": "4.51",
            "description": "Ulcerative (chronic) rectosigmoiditis w unsp complications",
            "amount": 30,
            "images": "http://dummyimage.com/217x100.png/ff4444/ffffff"
        }
    ]
    const catalog = useSelector(s => s.catalog)
    //useSelector это хук который получает наш store or s
    useEffect(() => {
        dispatch({type: "GET_CATALOG", payload: data})
    }, [data, dispatch])
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
                                    <button className="btn btn-primary" onClick={() =>  dispatch({type: "ADD_TO_CART", payload: product})}>В корзину</button>
                                </div>
                            </div>
                        </div>
                    )}
            </div>
        </div>
    );
};

export default Home;