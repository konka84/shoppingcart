import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ShoppingContext from "../contexts/ShoppingContext";
import SideBar from "./sidebar/SideBar";
import CheckoutPage from "./pages/CheckoutPage";
import Navbar from "./navbar/Navbar";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import Success from "./pages/Success";
import About from "./pages/About";


function Home() {
    return (
        <ShoppingContext>
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
                    <Route path="*" >
                        <Navbar />
                        <NotFound />
                        <SideBar />
                    </Route>
                </Switch>
            </Router>
        </ShoppingContext>
    )
}

export default Home;
