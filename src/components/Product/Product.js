import React from 'react';
import './Product.css'
const Product = ({ product, handelClick }) => {
    // console.log(props.handelClick);
    const { name, img, price, seller, ratings, quantity } = product
    return (
        <div className='product-container'>
            <img src={img} alt="not found" />
            <div className='product-details'>
                <h4>{name}</h4>
                <p>Price:${price}</p>
                <p><small>Quantity:{quantity}</small></p>
                <p>Seller: {seller}</p>
                <p>Ratings: {ratings} stars</p>
            </div>
            <div onClick={() => handelClick(product)} className='btnCart'>
                <button>Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;