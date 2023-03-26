import React, { useContext } from "react";
import { StoreContext } from "./context/StoreContext";
import { Card, Button, Form, Row, Col } from "react-bootstrap";

const SingleProductCard = (props) => {

    const product = props.product;
    const cart = useContext(StoreContext);
    const count = cart.getProductCount(product.id);

    return (
        <>
            <Card className="card mb-4 shadow-lg">
                <Card.Header align="left" className="card-header">Best Seller</Card.Header>
                <Card.Img variant="top" src={product.src} />
                <Card.Body className="card-body">
                    <Card.Title className="card-title">{product.title}</Card.Title>
                    <Card.Text className="card-text card-category">Technology</Card.Text>
                    <Card.Text className="card-text card-price">${product.price}</Card.Text>

                    {
                        count !== 0 ?
                            <>
                                <Form className="form-inline">
                                    <Row>
                                        <Col>
                                            <Form.Label className="form-label">In Cart: {cart.getProductCount(product.id)}</Form.Label>

                                            <Button variant="primary" size="sm" className="mx-2 btn btn-increment" onClick={() => cart.addProductToCart(product.id)} title="Increment quantity by 1"><i className="fa fa-plus fa-fw"></i></Button>

                                            <Button variant="danger" size="sm" className="btn btn-decrement" onClick={() => cart.removeProductFromCart(product.id)} title="Decrement quantity by 1"><i className="fa fa-minus fa-fw"></i></Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </> :
                            <Button variant="primary" size="sm" className="btn btn-add" onClick={() => cart.addProductToCart(product.id)} title="Add Item to Cart"><i className="fa fa-plus fa-fw"></i> Add to Cart</Button>
                    }

                    <Card.Text className="card-text card-description">{product.description}</Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}

export default SingleProductCard;