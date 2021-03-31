import React from 'react';
import './NotFound.css';
const NotFound = () => {
    return (
        <div className="container">
            <div className="not-found d-flex align-items-center justify-content-center">
                <h1 className="text-danger">404 not found</h1>
            </div>
        </div>
    );
};

export default NotFound;