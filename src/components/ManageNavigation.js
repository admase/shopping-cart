import React, { useState, useContext } from "react";
import { Button, Navbar, Nav, NavLink, Modal, Container } from "react-bootstrap";
import { StoreContext } from "./context/StoreContext";
import ManageCart from './ManageCart';

const ManageNavigation = () => {

    const cart = useContext(StoreContext);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const count = cart.products.reduce((sum, product) => sum + product.count, 0);

    return (
        <>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="/"><span className="text-decor">Pacific</span> Tech</Navbar.Brand>
                    <Navbar.Toggle aria-controls="react-bs-navbar" />
                    <Navbar.Collapse id="react-bs-navbar">
                        <Nav className="me-auto mb-2 mb-lg-0">
                            <NavLink href="/">Home</NavLink>
                            <NavLink href="/store">Shop</NavLink>
                        </Nav>
                        <Nav className="ms-auto mb-2 mb-lg-0">
                            <Button onClick={handleShow} className="btn btn-cart" size="md"><i className="fa fa-cart-shopping fa-fw"></i> ({count})</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="modal-title" align="center">Shopping Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        count > 0 ?
                            <>
                                {
                                    cart.products.map((product, index) => (
                                        <ManageCart key={index} id={product.id} count={product.count}></ManageCart>
                                    ))
                                }
                                <p>Total: ${cart.getTotalForOrder().toFixed(2)}</p>
                                <a href="/" className="btn btn-md btn-success">Check Out</a>
                            </> :
                            <h5 align="center">Your cart is empty</h5>
                    }
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ManageNavigation;