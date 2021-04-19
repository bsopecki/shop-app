import React from 'react';
import { Card } from 'react-bootstrap';

const Product = ({ product }) => {
    return (
        <Card className='my-3 p-3 rounded'>
            <a href={`/product${product.id}`}>
                <Card.Img src={product.image} variant='top'></Card.Img>
            </a>
            <Card.Body>
                <a href={`/product${product.id}`}>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text className='p-3'>{product.description}</Card.Text>
                </a>
            </Card.Body>
        </Card>
    )
}

export default Product
