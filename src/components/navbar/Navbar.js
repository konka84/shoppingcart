import { useContext,useState } from 'react';
import { Link,useHistory } from 'react-router-dom'
import { ModalContext, ShopContext } from '../../contexts/ShoppingContext';



export default function Navbar() {
//     const { cartProducts } = useContext(ShopContext);
//     const { setCartVisible } = useContext(ModalContext);
//     const [isHamMenuOpen, setIsHamMenuOpen] = useState(false);
//    // const history = useHistory();

//     //const siteLogo = "https://i.ibb.co/YfPBXvN/mockup-with-gold-logo-136295-386.jpg";
//     return (
//         <div className={`px-6 sm:px-12 lg:px-14 xl:px-20 py-5 overflow-y-hidden flex items-start md:items-center bg-gradient-to-tr from-night-light-100 to-neon1-light-300 fixed top-0 w-full z-10 md:h-24 transform ease-linear duration-300 transition-all ${isHamMenuOpen ? "max-h-60" : "max-h-20"}`}>
//             <div className="flex flex-wrap items-center flex-grow">
//                 <div className="md:hidden mr-5 transition transform hover:scale-105 hover:bg-opacity-80 text-night-light-100 bg-night-dark-100 p-2 rounded-lg" onClick={() => setIsHamMenuOpen(!isHamMenuOpen)}>
//                     {
//                         isHamMenuOpen ? (
//                             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                             </svg>
//                         ) : (
//                             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//                             </svg>
//                         )
//                     }
//                 </div>
//             <div className="flex flex-wrap items-center flex-grow">
//                 <img className=" logo 
//                   border-2  mr-2  sm:inline-block
//                  w-7 h-7 rounded "
//                     src={"https://e7.pngegg.com/pngimages/930/556/png-clipart-shopping-cart-shopping-cart-logo-online-shopping-service-shopping-cart-retail-rectangle-thumbnail.png"}
//                     alt="Site Logo" />
//                 <div className="md:space-x-5 mt-4  flex flex-col md:flex-row w-full md:w-auto md:inline-block">

//                     <div className="text-lg inline-block text-white transform hover:scale-110 hover:bg-opacity-80">
//                         <Link to="/home">Home </Link></div>
//                             {/* <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
//                                 <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1
//                          1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
//                             </svg> */}
                       
//                     <div className="text-lg inline-block text-white transform hover:scale-110 hover:bg-opacity-80"><Link to="/contact">Contact</Link></div>
//                         {/* <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
//                         <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
//                     </svg> */}
                    
//                     <div className="text-2xl inline-block font-bold text-white transition transform hover:scale-110 hover:bg-opacity-80" ><Link to="/about">About</Link></div>
//                 </div>
//             </div>
//             <button onClick={() => setCartVisible(true)} className="transition transform hover:scale-110 hover:bg-opacity-80 text-white text-3xl mx-2 my-1  white px-2 relative rounded-lg justify-self-end" >
//                 <i className="fa fa-shopping-cart"></i>
//                 {
//                     Object.keys(cartProducts).length ? (
//                         <p className="absolute -right-3 -top-3 text-base rounded-full px-2 bg-black  font-semibold">{Object.values(cartProducts).reduce((totalSelected, product) => totalSelected + product.count, 0)}</p>
//                     ) : ""
//                 }
//             </button>
//         </div>
//     )

const {cartProducts} = useContext(ShopContext);
const { setCartVisible } = useContext(ModalContext);
const [isHamMenuOpen, setIsHamMenuOpen] = useState(false);
const history = useHistory();

const siteLogo = "https://e7.pngegg.com/pngimages/930/556/png-clipart-shopping-cart-shopping-cart-logo-online-shopping-service-shopping-cart-retail-rectangle.png";
return (
    <div className={`px-6 sm:px-12 lg:px-14 xl:px-20 py-5 overflow-y-hidden flex items-start md:items-center bg-purple-400   fixed top-0 w-full z-10 md:h-24 transform ease-linear duration-300 transition-all ${isHamMenuOpen ? "max-h-60" : "max-h-20"}`}>
        <div className="flex flex-wrap items-center flex-grow">
            <div className="md:hidden mr-5 transition transform hover:scale-105 hover:bg-opacity-80 text-night-light-100 bg-night-dark-100 p-2 rounded-lg" onClick={() => setIsHamMenuOpen(!isHamMenuOpen)}>
                {
                    isHamMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )
                }
            </div>
            <img onClick={() => history.push('/')} className="cursor-pointer transition transform hover:scale-105 hover:bg-opacity-80 border-2 border-night-light-400 mr-2 hidden sm:inline-block w-11 h-11 md:w-16 md:h-16 rounded-lg md:rounded-2xl" src={siteLogo} alt="Site Logo" />
            <h2 onClick={() => history.push('/')} className="cursor-pointer text-white font-bold text-3xl font-serif transition transform hover:scale-105 hover:bg-opacity-80 mr-8">ShoPoholic</h2>
            <div className="md:space-x-5 mt-4  flex flex-col md:flex-row w-full md:w-auto md:inline-block">
                <div className="text-lg inline-block font-semibold my-1 text-night-light-100 bg-white px-2 rounded-md transition transform hover:scale-110 hover:bg-opacity-80"><Link to="/">Products</Link></div>
                <div className="text-lg inline-block font-semibold my-1 text-night-light-100 bg-white px-2 rounded-md transition transform hover:scale-110 hover:bg-opacity-80"><Link to="/about/">About</Link></div>
                <div className="text-lg inline-block font-semibold my-1 text-night-light-100 bg-white px-2 rounded-md transition transform hover:scale-110 hover:bg-opacity-80"><Link to="/contacts/">Contacts</Link></div>
            </div>
        </div>
        <button onClick={() => setCartVisible(true)} className="transition transform hover:scale-110 hover:bg-opacity-80 text-3xl mx-2 my-1 text-white text-night-light-100 px-2 relative rounded-lg justify-self-end" >
            <i className="fa fa-shopping-cart"></i>
            {
                Object.keys(cartProducts).length ? (
                    <p className="absolute -right-3 -top-3 text-base rounded-full px-2 bg-black text-neon1-light-300 font-semibold">{Object.values(cartProducts).reduce((totalSelected, product) => totalSelected + product.count, 0)}</p>
                ) : ""
            }
        </button>
    </div>
)
}
