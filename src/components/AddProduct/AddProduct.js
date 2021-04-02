import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const [imageUrl, setImageUrl] = useState('');
    
    const onSubmit = data => {
        console.log(data);
        const newProduct = {
            "name": data.productName,
            "price": data.productPrice,
            "weight": data.productWeight,
            "imageUrl": imageUrl
        }
        const url = `https://sheltered-taiga-37927.herokuapp.com/addProduct`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
            setImageUrl('');
            if(result){
                alert("New Product added");
            }
        })
    };

    const handleImageUpload = event => {
        console.log(event.target.files);
        const imageData = new FormData();
        imageData.set('key', 'e2a7cc8c06d4c5f25b87b2e826111178');
        imageData.append('image', event.target.files[0]);
        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageUrl(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    return (
        <div className="container">
            <h3>Add Product</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div>
                        <label htmlFor="productName">Product </label>
                        <br />
                        <input type="text" name="productName" placeholder="Enter Name" ref={register} />
                    </div>
                    <div>
                        <label htmlFor="productWeight">Weight </label>
                        <br />
                        <input type="text" name="productWeight" placeholder="Enter weight" ref={register} />
                    </div>
                </div>
                <br />
                <div className="row">
                    <div>
                        <label htmlFor="productPrice">Product </label>
                        <br />
                        <input type="text" name="productPrice" placeholder="Enter Price" ref={register} />
                    </div>
                    <div>
                        <label htmlFor="productImage">Upload Photo </label>
                        <br />
                        <input type="file" name="productImage" placeholder="Upload photo" onChange={handleImageUpload} />
                    </div>
                </div>
                <br />
                <div className="row">
                    <input type="submit" />
                </div>
            </form>




        </div>
    );
};

export default AddProduct;