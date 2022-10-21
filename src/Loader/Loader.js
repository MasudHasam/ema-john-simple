import { getStroedCart } from "../utilities/fakedb";

export const loadProductAndCart = async () => {
    //get products data. 
    const productdata = await fetch('products.json');
    const products = await productdata.json();

    //get stroed data.
    const stroedData = getStroedCart();
    const newCart = [];
    for (const id in stroedData) {
        const addedProduct = products.find(product => product.id === id)
        if (addedProduct) {
            const quantity = stroedData[id];
            const newQuantity = quantity;
            addedProduct.quantity = newQuantity;
            newCart.push(addedProduct);
        }
    }


    return { products, newCart };
}