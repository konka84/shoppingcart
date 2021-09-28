import axios from "axios"
import getCategories from "./categories";


function datafetch(setCartProducts){
    axios.get("https://fakestoreapi.com/products")
    .then((response) => {
        const allProducts = response.data;
        const categories = getCategories(allProducts)
        localStorage.setItem("Products", JSON.stringify(allProducts));
        localStorage.setItem("Categories", JSON.stringify(categories)); 
        console.log(allProducts)
        setCartProducts({});
    })
    .catch(error=>{
        alert(error.stack);
    })
}


export default datafetch;