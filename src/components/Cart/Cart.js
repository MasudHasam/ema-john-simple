import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {

    let totalPrice = 0;
    let totalShipingCost = 0;
    let tax = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        totalPrice = totalPrice + product.price * product.quantity;
        totalShipingCost = totalShipingCost + product.shipping;
        tax = (totalPrice * 0.1).toFixed(2);
        tax = parseFloat(tax);
    }
    let grandTotal = totalPrice + totalShipingCost + tax;

    return (
        <div className='cart-area'>
            <h2 className='hedline'>Order Summary.</h2>
            <div className='cart-details'>
                <p>Selected Item: {quantity}</p>
                <p>Total Price: ${totalPrice}</p>
                <p>Total Shiping Cost: ${totalShipingCost}</p>
                <p>Tax: ${tax}</p>
                <h5>Grand Total:${grandTotal}</h5>
            </div>
        </div>
    );
};

export default Cart;