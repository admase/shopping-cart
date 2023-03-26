import React, { createContext, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { productData, getProductData } from './productData';

export const StoreContext = createContext({
    products: [],
    getProductCount: () => { },
    addProductToCart: () => { },
    removeProductFromCart: () => { },
    deleteProduct: () => { },
    getTotalForOrder: () => { },
});

export function StoreProvider({ children }) {
    const [itemsInCart, setItemsInCart] = useState([]);

    function getProductCount(id) {
        const count = itemsInCart.find((item) => item.id === id)?.count;
        if (count === undefined) return 0;
    };

    function addProductToCart(id) {
        const count = getProductCount(id);
        if (count === 0) {
            setItemsInCart([...itemsInCart, { id: id, count: 1 }]);
        }
        else {
            setItemsInCart(itemsInCart.map((item) => item.id === id ? { ...item, count: item.count + 1 } : item));
        }
    };

    function removeProductFromCart(id) {
        const count = getProductCount(id);
        if (count === 0) {
            setItemsInCart([...itemsInCart, { id: id, count: 1 }]);
        }
        else {
            setItemsInCart(itemsInCart.map((item) => item.id === id ? { ...item, count: item.count - 1 } : item));
        }
    };

    function deleteProduct(id) {
        setItemsInCart((itemsInCart) => itemsInCart.filter((currentItem) => {
            return currentItem.id !== id;
        }));
    };

    function getTotalForOrder() {
        let totalCost = 0;

        // eslint-disable-next-line array-callback-return
        itemsInCart.map((item) => {
            const itemData = getProductData(item.id);
            totalCost += itemData.price * item.count;
        });
        return totalCost;
    };

    const contextValue = {
        products: itemsInCart,
        getProductCount,
        addProductToCart,
        removeProductFromCart,
        deleteProduct,
        getTotalForOrder,
    };

    return (
        <>
            <StoreContext.Provider value={contextValue}>{children}</StoreContext.Provider>
        </>
    );
}