import classes from './Cart.module.css';
import cartIcon from './../assets/react.svg';
import CartContext from '../store/cart-context';
import {useContext} from 'react';

const Cart = () => {
    const cartCtx = useContext(CartContext);

    return (
        <>
            <div className={classes.cartWrapper}>
                <img src={cartIcon} alt="Cart" className={classes.cartLogo} />
                <p className={classes.cartText}>Cart</p>
                <p className={classes.cartCount}>{cartCtx.cart.itemCount}</p>
            </div>
        </>
    );
}

export default Cart;