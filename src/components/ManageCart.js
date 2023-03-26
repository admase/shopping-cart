import React, { useContext } from "react";
import { StoreContext } from "./context/StoreContext";
import { getProductData } from "./context/productData";
import { Card, Button } from "react-bootstrap";

const ManageCart = (props) => {

    const cart = useContext(StoreContext);
    const id = props.id;
    const count = props.count;
    const product = getProductData(id);

    return (
        <>
            <Card.Title className="card-title">{product.title}</Card.Title>
            <div className="row">
                <div className="col">
                    <Card.Text className="card-text card-count">Qty: {count}</Card.Text>
                </div>
                <div className="col">
                    <Button size="sm" className="btn btn-increment" onClick={() => cart.addProductToCart(product.id)} title="Increment quantity by 1"><i className="fa fa-plus fa-fw"></i></Button>
                    &nbsp;&nbsp;
                    <Button size="sm" variant="danger" className="btn btn-decrement" onClick={() => cart.removeProductFromCart(product.id)} title="decrement quantity by 1"><i className="fa fa-minus fa-fw"></i></Button>
                </div>
            </div>
            <Card.Text className="card-text card-price">Price: ${(count * product.price).toFixed(2)}</Card.Text>
            <Button size="sm" variant="danger" className="btn btn-delete" onClick={() => cart.deleteProduct(id)}>Remove</Button>
            <hr />
        </>
    );
}

export default ManageCart;