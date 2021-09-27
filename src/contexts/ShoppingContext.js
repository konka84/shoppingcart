import React, { useEffect, useState } from "react"
const axios = require('axios').default


export const ShopContext = React.createContext();
export const ModalContext = React.createContext();

function ShoppingContext({ children }) {
    const [cartProducts, setCartProducts] = useState({});
    const [cartVisible, setCartVisible] = useState(false);

    useEffect(setAllProducts, [])

    function getCategories(allProducts) {
        return allProducts.reduce((categories, product) => {
            return categories.some(category => category === product.category) ? categories : [...categories, product.category]
        }, []);
    }
    
    function setAllProducts() {
        if ((!localStorage.getItem("Products"))||(!localStorage.getItem("Categories"))) {
            axios.get("https://fakestoreapi.com/products")
                .then((resp) => {
                    const allProducts = resp.data;
                    const categories = getCategories(allProducts);

                    localStorage.setItem("Products", JSON.stringify(allProducts));
                    localStorage.setItem("Categories", JSON.stringify(categories)); 
                    setCartProducts({});
                })
                .catch(error=>{
                    alert(error.stack);
                })
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

export default ShoppingContext;