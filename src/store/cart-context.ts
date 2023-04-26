import React from "react";
import { TCartContext } from "../types/TCartContext";
import { CartActionKind } from "./CartActionKind";
import { TCartItem } from "../types/TCartItem";

const CartContext = React.createContext<TCartContext>({
    cart: {cart: [], itemCount: 0},
    cartDispatch: ({type, payload}: {type: CartActionKind, payload: TCartItem} ) => {type;},
})

export default CartContext;