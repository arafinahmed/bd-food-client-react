import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import './ManageProduct.css';
const useStyles = makeStyles({
    table: {
        minWidth: 200,
    },
});


const ManageProduct = () => {
    const classes = useStyles();
    const [products, setProducts] = useState([]);
    const [deleted, setDeleted] = useState(false);
    useEffect(() => {
        fetch('https://sheltered-taiga-37927.herokuapp.com/allProducts')
            .then(res => res.json())
            .then(data => {
                data.reverse();
                setProducts(data)
            });
    }, [deleted]);
    const rows = products;
    console.log(products);
    const deleteProduct = (id) => {
        fetch(`https://sheltered-taiga-37927.herokuapp.com/deleteProduct/${id}`, {
            method: 'delete'
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                alert("Product is deleted successfully");
                setDeleted(!deleted);
            }
        })
    }
    return (
        <div className="container">
            <h3>Manage Product</h3>
            <TableContainer component={Paper}>
                            <Table className={classes.table} size="small" aria-label="a dense table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Description</TableCell>
                                        <TableCell align="right">Weight</TableCell>
                                        <TableCell align="right">Price</TableCell>
                                        <TableCell align="right">Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow key={row.name}>
                                            <TableCell component="th" scope="row">
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="right">{row.weight}</TableCell>
                                            <TableCell align="right">${row.price}</TableCell>
                                            <TableCell align="right"><DeleteForeverIcon className="deleteIcon" color="secondary" onClick={() => deleteProduct(row._id)}/></TableCell>

                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
        </div>
    );
};

export default ManageProduct;