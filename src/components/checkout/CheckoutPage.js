import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { ShopContext } from "../../contexts/ShoppingContext";
import Navbar from "../navbar/Navbar";
import SideBar from "../sidebar/SideBar";



export default function CheckoutPage() {
    const { cartProducts, setCartProducts } = useContext(ShopContext);
    const history = useHistory();

    function handleSubmit() {
        setCartProducts({});
        history.push('/success/')
    }
    return (
        <div className=" bg-gradient-to-br from-purple-400 to-purple 200 w-full h-screen">
            {
               <div>
                   <Navbar/>
                    <div className="w-3/6 md:w-1/2 mx-auto bg-white-600 rounded-md my-20 p-8">
                        <form className="flex flex-col space-y-5" onSubmit={handleSubmit}>
                            <input className required="focus:bg-white hover:scale-102 transition transform p-2 text-gray-900 placeholder-gray-500 rounded-md bg-gray-200 border border-gray-200 focus:border-gray-500 outline-none focus:outline-none" type="text" name="fname" placeholder="First Name" />
                            <input className required ="focus:bg-white hover:scale-102 transition transform p-2 text-gray-900 placeholder-gray-500 rounded-md bg-gray-200 border border-gray-200 focus:border-gray-500 outline-none focus:outline-none" type="text" name="lname" placeholder="Last Name" />
                            <input className required="focus:bg-white hover:scale-102 transition transform p-2 text-gray-900 placeholder-gray-500 rounded-md bg-gray-200 border border-gray-200 focus:border-gray-500 outline-none focus:outline-none" type="email" name="email" placeholder="Email" />
                            <textarea className required ="focus:bg-white resize-none hover:scale-102 transition transform p-2 text-gray-900 placeholder-gray-500 rounded-md bg-gray-200 border border-gray-200 focus:border-gray-500 outline-none focus:outline-none" name="address" placeholder="Address" />
                            <textarea className="focus:bg-white resize-none hover:scale-102 transition transform p-2 text-gray-900 placeholder-gray-500 rounded-md bg-gray-200 border border-gray-200 focus:border-gray-500 outline-none focus:outline-none" name="address" placeholder="Notes" />
                            <div className="flex py-1 px-4 bg-gray-50 rounded-md mx-2">
                                <h4 className="font-semibold text-base sm:text-lg">Total Items: </h4>
                                <h6 className="flex-grow text-right w-1/2 text-base sm:text-lg font-bold">{Object.values(cartProducts).reduce((totalSelected, product) => totalSelected + product.count, 0)}</h6>
                            </div>
                            <div className="flex py-1 px-4 bg-gray-50 rounded-md mx-2">
                                <h4 className="font-semibold text-base sm:text-lg">Total Cost: </h4>
                                <h6 className="flex-grow text-right w-1/2 text-base sm:text-lg font-bold">{Object.values(cartProducts).reduce((totalCost, product) => totalCost + (product.count * product.price), 0).toFixed(2)}<i className="fa fa-dollar text-base pl-2"></i></h6>
                            </div>
                            <button className="bg-purple-400 p-3 rounded-lg transform transition hover:bg-purple-500 hover:scale-105 font-semibold text-lg" type="submit" >Confirm</button>
                            <button className="bg-purple-400 p-3 rounded-lg transform transition hover:bg-purple-500 hover:scale-105 font-semibold text-lg" onClick={() => history.push('/')}>Cancel</button>
                        </form>
                    </div>
                    <SideBar/>
                    </div>
               
            }
        </div>
    )
}
