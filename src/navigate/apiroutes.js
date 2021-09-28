import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Products from "../components/products/Products";
import SideBar from "../components/sidebar/SideBar";
import CheckoutPage from "../components/checkout/CheckoutPage";
import About from "../components/about/About";
import Success from "../components/success/Success";
import NotFound from "../components/notfound/NotFound";
import Contact from "../components/contact/Contact";

export default function Apiroutes(){
    return(
        <Router>
                <Switch>
                    <Route exact path="/" >
                        <Navbar />
                        <Products />
                        <SideBar />
                    </Route>
                    <Route exact path="/checkout/" >
                        <Navbar />
                        <CheckoutPage />
                        <SideBar />
                    </Route>
                    <Route path="/success/" >
                        <Navbar />
                        <Success />
                        <SideBar />
                    </Route>
                    <Route path="/about/" >
                        <Navbar />
                        <About/>
                        
                    </Route>
                    <Route path="/contacts/" >
                        <Navbar />
                        <Contact/>
                        
                    </Route>
                    <Route path="*" >
                        <Navbar />
                        <NotFound />
                        <SideBar />
                    </Route>
                </Switch>
         </Router>
    )
}