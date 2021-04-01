import React, { useState } from 'react';
import AddProduct from '../AddProduct/AddProduct';
import ManageProduct from '../ManageProduct/ManageProduct';
import './Admin.css';
const Admin = () => {
    const [manageProduct, setManageProduct] = useState(false);
    const [addProduct, setAddProduct] = useState(true);
    const [editProduct, setEditProduct] = useState(false);
    return (
        <div>
            <p className="d-flex justify-content-center">
                <span onClick={() => {
                    setManageProduct(true);
                    setAddProduct(false);
                    setEditProduct(false);
                }} className="link-tag">Manage Product</span>
                <span onClick={() => {
                    setManageProduct(false);
                    setAddProduct(true);
                    setEditProduct(false);
                }}
                    className="link-tag">Add Product</span>
                <span onClick={
                    () => {
                        setManageProduct(false);
                        setAddProduct(false);
                        setEditProduct(true);
                    }
                }
                    className="link-tag">Edit Product</span>
            </p>
            {
                addProduct && <AddProduct></AddProduct>
            }
            {
                manageProduct && <ManageProduct></ManageProduct>
            }
            {
                editProduct && <ManageProduct></ManageProduct>
            }
        </div>
    );
};

export default Admin;