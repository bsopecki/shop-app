import React from 'react';
import Product from '../components/Product';
import { Row, Col } from 'react-bootstrap';
import products from '../products';

const Homescreen = () => {
    return (
        <>
            <h1>Latest products</h1>
            <Row>
                {products.map((product) => {
                    return (
                        <Col sm={12} md={6} lg={4} xl={3}>
                            <Product product={product}/>
                        </Col>
                    )
                })}
            </Row>
        </>
    )
}

export default Homescreen