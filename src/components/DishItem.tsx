import { CartActionKind } from '../store/CartActionKind';
import CartContext from '../store/cart-context';
import { TDish } from '../types/TDish';
import classes from './DishItem.module.css';
import {useContext, useRef} from 'react';

const DishItem = ({dish}: {dish: TDish}) => {
    const cartCtx = useContext(CartContext);
    const amountRef = useRef<HTMLInputElement>(null)

    const addItem = () => {
        if (!amountRef.current?.valueAsNumber)
            return;
        const cartItem = {dish, quantity: amountRef.current.valueAsNumber};
        cartCtx.cartDispatch({type: CartActionKind.ADD_ITEM, payload: cartItem});
    }
    return (
        <div className={classes.dishItem}>
            <div className={classes.dishInfo}>
                <p className={classes.dishName}>{dish.name}</p>
                <p>{dish.description}</p>
                <p className={classes.dishPrice}>${dish.price}</p>
            </div>
            <div className={classes.actionGroup}>
                <p className={classes.amountInput}>
                    <label htmlFor="amount">Amount</label>
                    <input type="number" min={0} ref={amountRef}/>
                </p>
                <p>
                    <button className={classes.addButton} onClick={addItem}>+Add</button>
                </p>
            </div>
        </div>
    );
}
 
export default DishItem;
