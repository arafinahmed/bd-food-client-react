import React from 'react';
import './Product.css';
const Product = ({product}) => {
    const {_id, name, price, weight, imageUrl} = product;
    console.log(_id, name, price, imageUrl);
    return (
        <div className="product-info">
            <img className="img-fluid" src={imageUrl} alt=""/>
            <h6>{name} {weight}</h6>
            <div className="d-flex justify-content-around">
            <h3>${price}</h3>
            <button className="btn btn-success">Buy Now</button>
            </div>
        </div>
    );
};

export default Product;