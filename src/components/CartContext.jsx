import { createContext} from "react"; 
import {useState, useEffect} from 'react';

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);



    const addToCart = (item, qty) => {
        const index = cartList.find(cartItem => cartItem.id === item.id);

        index === undefined ?  setCartList([...cartList, {item, qtyItem : qty, id: item.id, product: item.product, price: item.price, image: item.image, memes: item.memes, description: item.description, stock: item.stock}]) : index.qtyItem  += qty;


    }
    const removeFromCart = (item) => {
        setCartList(cartList.filter(cartItem => cartItem.id !== item.id))
    }

    const removeAllFromCart = () => {
        setCartList([]);
    }
    



return (
<CartContext.Provider value={{cartList, addToCart, removeFromCart, removeAllFromCart}}>
{children}
  </CartContext.Provider>

)

}
export default CartContextProvider;

