import axios from "axios"
import getCategories from "./categories";


const axiosClient = axios.get("https://fakestoreapi.com/products")
.then((resp) => {
    const allProducts = resp.data;
    const categories = getCategories(allProducts)
    localStorage.setItem("Products", JSON.stringify(allProducts));
    localStorage.setItem("Categories", JSON.stringify(categories)); 
})
.catch(error=>{
    alert(error.stack);
})

export default axiosClient;