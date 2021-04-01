import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { ContextApi } from '../../App';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    table: {
        minWidth: 200,
    },
});




const Checkout = () => {
    const [loggedInUser] = useContext(ContextApi);
    const classes = useStyles();
    const id = useParams().id;
    const [product, setProduct] = useState({});
    const [successful, setSuccessful] = useState(false);
    useEffect(() => {
        fetch(`http://localhost:8888/product/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id]);
    const rows = [{ ...product, "quantity": 1 }, { "name": "Total", "price": product.price }];
    const placeOrder = () => {
        const time = new Date();
        const orderInfo = {
            "email": loggedInUser.email,
            "time": time,
            "productId": id,
            "productName": product.name,
            "price": product.price
        }
        fetch("http://localhost:8888/newOrder", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderInfo)
        })
            .then(res => res.json())
            .then(data => {
                setSuccessful(data);
            })
    }
    return (
        <div className="container">
            <br />
            <br />
            {
                successful ? <>
                    <p>Your order is placed successfully... 
                        <br/>
                        Thanks for Shopping...
                        <br></br>
                        <Link to="/">Shop More</Link>
                    </p>
                </> :
                    <>
                        <TableContainer component={Paper}>
                            <Table className={classes.table} size="small" aria-label="a dense table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Description</TableCell>
                                        <TableCell align="right">Quantity</TableCell>
                                        <TableCell align="right">Price</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow key={row.name}>
                                            <TableCell component="th" scope="row">
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="right">{row.quantity}</TableCell>
                                            <TableCell align="right">${row.price}</TableCell>

                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <br />
                        <div className="d-flex justify-content-end">
                            <button onClick={placeOrder} className="btn btn-success">Checkout</button>
                        </div>
                    </>
            }
        </div>
    );
};

export default Checkout;