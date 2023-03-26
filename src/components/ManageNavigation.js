import React, { useState, useContext } from "react";
import { Button, Navbar, Nav, NavLink, Modal, Container } from "react-bootstrap";
import { StoreContext } from "./context/StoreContext";
import ManageCart from './ManageCart';
import Layout from './pages/Layout';

const ManageNavigation = () => {

    const cart = useContext(StoreContext);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const count = cart.products.reduce((sum, product) => sum + product.count, 0);

    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand" href="/"><span className="text-decor">Pacific</span> Tech</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <Layout />
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <Button onClick={handleShow} size="md">
                                <i className="fa fa-cart-shopping fa-fw"></i> ({count})</Button>
                        </ul>
                    </div>
                </div>
            </nav>

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
