import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Home.css';
const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8888/allProducts')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, [])
    console.log(products);
    return (
        <div className="container product-container">
            {
                products.map(pd => <Product product={pd} key={pd._id}></Product>)
            }
        </div>
    );
};

export default Home;