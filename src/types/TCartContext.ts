import { Dispatch } from "react";
import { CartActionKind } from "../store/CartActionKind"
import { TCart } from "./TCart"
import { TCartItem } from "./TCartItem";

export type TCartContext = {
    cart: TCart,
    cartDispatch: Dispatch<{ type: CartActionKind; payload: TCartItem; }>,
}