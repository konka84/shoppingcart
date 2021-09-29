import React, { useEffect, useState } from "react"
import datafetch from "../api/datafetch";

export const ShopContext = React.createContext();
export const ModalContext = React.createContext();

export default function ShoppingContext({ children }) {
    const [cartProducts, setCartProducts] = useState({});
    const [cartVisible, setCartVisible] = useState(false);

    useEffect(setAllProducts, [])
    
    function setAllProducts ()  {
        if (!localStorage.getItem("Products")) {
            datafetch();
           
        }
    }
    return (
        <ShopContext.Provider value={{ cartProducts, setCartProducts}}>
             <ModalContext.Provider value={{ cartVisible, setCartVisible }} >
                {children}
            </ModalContext.Provider> 
        </ShopContext.Provider>
    )
}
