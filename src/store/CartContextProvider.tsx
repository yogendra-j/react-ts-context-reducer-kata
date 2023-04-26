import { useReducer } from "react";
import CartContext from "./cart-context";
import { TCart } from "../types/TCart";
import { CartActionKind } from "./CartActionKind";
import { TCartItem } from "../types/TCartItem";

const cartReducer = (cart: TCart, actions: {type: CartActionKind, payload: TCartItem}) => {
    const {type, payload} = actions;
    if (type === CartActionKind.ADD_ITEM) {
        const itemForDish = cart.cart.find(item => item.dish.id === payload.dish.id);
        if (itemForDish === undefined)
            return {cart: [...cart.cart, payload], itemCount: cart.itemCount + payload.quantity}
        else {
            itemForDish.quantity += payload.quantity;
            return {cart: [...cart.cart], itemCount: cart.itemCount + payload.quantity}
        }
    }

    return cart;
}

const initialCart: TCart = {cart: [], itemCount: 0};

const CartContextProvider = ({children}: {children: JSX.Element[]}) => {
    const [cartState, cartDispatch] = useReducer(cartReducer, initialCart);


    return (
        <CartContext.Provider value={{cart: cartState, cartDispatch}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;