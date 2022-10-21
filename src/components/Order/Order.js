import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom'
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import OrderdItemDetails from '../OrderdItemDetails/OrderdItemDetails';
import Product from '../Product/Product';
const Order = () => {
    const { products, newCart } = useLoaderData();
    const [cart, setCart] = useState(newCart);

    const handelRemoveItem = (id) => {
        const remainingItem = cart.filter(cartItem => cartItem.id !== id)
        setCart(remainingItem);
        removeFromDb(id)
    }

    return (
        <div>
            <div className='shop-container'>
                <div className='all-product'>
                    {
                        cart.map(product => <OrderdItemDetails
                            key={product.id}
                            product={product}
                            handelRemoveItem={handelRemoveItem}
                        ></OrderdItemDetails>)
                    }
                </div>
                <div className='cart-container'>
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Order;