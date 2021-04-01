import React from 'react';
import './Order.css';
const Order = ({order}) => {
    console.log(order);
    const {time, productName, price, _id} = order;
    return (
        <div className="my-orders">
            <h6>{new Date(time).toDateString('dd/MM/yyyy')}</h6>
            <h5>Product Name: <strong>{productName}</strong></h5>
            <h5>Product Price: <strong>${price}</strong></h5>
            <p> Your order id:  <small>{_id}</small> </p>
        </div>
    );
};

export default Order;