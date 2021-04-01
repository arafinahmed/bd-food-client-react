import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Home.css';
import CircularProgress from '@material-ui/core/CircularProgress';
const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8888/allProducts')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    console.log(products);
    return (
        <div>

            {
                products.length ? <div className="container product-container">{products.map(pd => <Product product={pd} key={pd._id}></Product>)}</div>
                    :
                    <div className="spinner d-flex justify-content-center align-items-center">
                        
                            <CircularProgress />
                        
                    </div>

            }
        </div>
    );
};

export default Home;