import React from 'react';
import './OrderdItemDetails.css'

const OrderdItemDetails = ({ product, handelRemoveItem }) => {
    const { name, img, price, quantity, shipping, id } = product;
    return (
        <div className='orderdItem'>
            <img src={img} alt="" />
            <h1>{name}</h1>
            <p>Price: {price}</p>
            <p>Quantity: {quantity}</p>
            <p>Shipping: {shipping}</p>
            <button className='bg-black px-2 py-1 rounded-md hover:bg-slate-800 text-white font-bold' onClick={() => handelRemoveItem(id)}>Delet Item</button>
        </div>
    );
};

export default OrderdItemDetails;