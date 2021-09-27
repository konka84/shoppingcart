import React from "react";
import ShoppingContext from "../contexts/ShoppingContext";
import Apiroutes from "./apiroutes";



export default function Browser() {
    return (
        <ShoppingContext>
            <Apiroutes/>
        </ShoppingContext>
    )
}

