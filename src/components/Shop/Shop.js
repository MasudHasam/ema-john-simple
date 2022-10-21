import React, { useEffect, useState } from 'react';
import { addToDb, getStroedCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import { useLoaderData } from 'react-router-dom';

const Shop = () => {
    const { products, newCart } = useLoaderData();
    const [cart, setCart] = useState(newCart);

    // useEffect(() => {
    //     const getLsData = getStroedCart();
    //     let previousCart = [];
    //     for (const id in getLsData) {
    //         const addedProduct = products.find(product => product.id === id)
    //         if (addedProduct) {
    //             const quentity = getLsData[id];
    //             addedProduct.quantity = quentity;
    //             previousCart.push(addedProduct);
    //         }
    //         setCart(previousCart);
    //     }
    // }, [products])


    const handelClick = (singleProduct) => {
        let newCart = [];
        const existProduct = cart.find(product => product.id === singleProduct.id);
        if (!existProduct) {
            singleProduct.quantity = 1;
            newCart = [...cart, singleProduct];
        } else {
            const rest = cart.filter(product => product.id !== existProduct.id)
            existProduct.quantity = existProduct.quantity + 1;
            newCart = [...rest, existProduct]
        }
        setCart(newCart);
        addToDb(singleProduct.id);
    }
    // console.log(cart)

    return (
        <div className='shop-container'>
            <div className='all-product'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handelClick={handelClick}
                    ></Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;