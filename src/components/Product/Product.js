import React from 'react';
import './Product.css';
import { useHistory} from 'react-router';
const Product = ({product}) => {
    const {_id, name, price, weight, imageUrl} = product;
    console.log(_id, name, price, imageUrl);
    let history = useHistory();
    const buyNow = (id) => {
        history.replace("/checkout/"+id);
    }
    return (
        <div className="product-info">
            <img className="img-fluid" src={imageUrl} alt=""/>
            <h6>{name} {weight}</h6>
            <div className="d-flex justify-content-around">
            <h3>${price}</h3>
            <button onClick={() => buyNow(_id)} className="btn btn-success">Buy Now</button>
            </div>
        </div>
    );
};

export default Product;