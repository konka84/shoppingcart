import React, { useEffect, useState } from "react"
import axiosClient from "../api/client";

export const ShopContext = React.createContext();
export const ModalContext = React.createContext();

export default function ShoppingContext({ children }) {
    const [cartProducts, setCartProducts] = useState({});
    const [cartVisible, setCartVisible] = useState(false);

    useEffect(setAllProducts, [])
    
    function setAllProducts() {
        if ((!localStorage.getItem("Products"))||(!localStorage.getItem("Categories"))) {
            axiosClient()
            setCartProducts({})
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
