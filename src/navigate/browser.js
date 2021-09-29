import React from "react";
import ShoppingContext from "../contexts/ShoppingContext";
import Routing from "./router";



export default function Browser() {
    return (
        <ShoppingContext>
            <Routing/>
        </ShoppingContext>
    )
}

