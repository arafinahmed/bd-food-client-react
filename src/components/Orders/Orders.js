import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ContextApi } from '../../App';
import Order from '../Order/Order';

const Orders = () => {
    const [loggedInUser] = useContext(ContextApi);
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:8888/allOrders?email=${loggedInUser.email}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json())
            .then(data => {
                data.reverse();
                setOrders(data)
            })
    }, [loggedInUser]);
    console.log(orders);
    return (
        <div className="container">
            {
                orders.length ? <>
                    <br/>
                    <h3>All Orders of {loggedInUser.email}</h3>
                    {
                        orders.map(order => <Order order={order} key={order._key}></Order>)
                    }
                    </>:
                    <>
                    <br/>
                    <h3>There is no orders for {loggedInUser.email}</h3>
                    <h4>
                        Please <Link to="/">Check our products</Link>
                    </h4>
                    </>
            }
        </div>
    );
};

export default Orders;