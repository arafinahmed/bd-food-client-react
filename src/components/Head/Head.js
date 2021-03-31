import React, { useContext } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

import { Link } from 'react-router-dom';

import './Head.css';
import { ContextApi } from '../../App';
const Head = () => {
    const [loggedInUser, setLoggedInUser] = useContext(ContextApi);
   

    return (
        <Navbar className="container" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand><Link to="/">BD Food</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Nav>
                    <Nav.Link><Link to="/">Home</Link></Nav.Link>
                    <Nav.Link><Link to="/orders">Orders</Link></Nav.Link>
                    <Nav.Link><Link to="/admin">Admin</Link></Nav.Link>
                    <Nav.Link><Link to="/deals">Deals</Link></Nav.Link>
                    {
                        loggedInUser.email && <Nav.Link>{loggedInUser.displayName}</Nav.Link>
                    }
                    {
                        loggedInUser.email ?
                            <Nav.Link><Link to="/">
                                
                            <Button onClick={() => {setLoggedInUser({})}}  variant="danger">Logout</Button>
                            </Link></Nav.Link>
                            :
                            <Nav.Link><Link to="/login">
                                <Button variant="primary">Login</Button>
                            </Link></Nav.Link>
                    }
                    
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Head;