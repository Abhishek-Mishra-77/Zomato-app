import React, { useState, useEffect, createContext } from 'react';

export const ItemProvideContext = createContext();

const ItemProvider = (props) => {

    const [items, setItems] = useState([]);
    const [count, setCount] = useState(7);
    const [totalAmount, setTotalAmount] = useState(0);


    useEffect(() => {
        let c = 0;
        let a = 0;
        items.forEach((item) => {
            c = c + item.count;
            a += item.count * item.price;
        })
        setTotalAmount(a);
        setCount(c);
    }, [items])




    const addCartItem = (products) => {
        const { resId } = products.info;
        const priceString = products.info.cfo.text;
        const numericPrice = parseFloat(priceString.replace(/[^\d.]/g, ""));
        console.log(numericPrice)
        setItems((items) => {
            if (items) {
                const restItem = items.filter((item) => item.resId !== resId);
                const currentItem = items.find((item) => item.resId === resId);
                if (currentItem) {
                    currentItem.count++;
                    localStorage.setItem('items', JSON.stringify(currentItem));
                    return [...restItem, currentItem];
                }
                else {
                    const newItem = {
                        resId: resId,
                        count: 1,
                        image: products.info.image.url,
                        name: products.info.name,
                        price: numericPrice

                    }
                    localStorage.setItem('items', JSON.stringify(newItem));
                    return [...restItem, newItem];
                }
            }
            else {
                const newItem = {
                    resId: resId,
                    count: 1,
                    image: products.info.image.url,
                    name: products.info.name,
                    price: numericPrice
                }
                localStorage.setItem('items', JSON.stringify(newItem));
                return newItem;
            }
        })
    }

    const removeCartItem = (resId) => {
        console.log(resId);
        setItems((items) => {
            const currentItem = items.filter((item) => item.resId !== resId)
            return currentItem;
        })
    }



    return (
        <ItemProvideContext.Provider value={{ addCartItem, items, count, totalAmount, removeCartItem }}>
            {props.children}
        </ItemProvideContext.Provider>
    )
}

export default ItemProvider;
