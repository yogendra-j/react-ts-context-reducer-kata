import { CartActionKind } from '../store/CartActionKind';
import CartContext from '../store/cart-context';
import { TDish } from '../types/TDish';
import classes from './DishItem.module.css';
import {ChangeEvent, useContext, useState} from 'react';

const DishItem = ({dish}: {dish: TDish}) => {
    const cartCtx = useContext(CartContext);
    const [amount, setAmount] = useState(0);
    const [isAmountDirty, setIsAmountDirty] = useState(false);
    const isValidAmount = amount > 0;
    const shouldShowError = !isValidAmount && isAmountDirty;

    const addItem = () => {
        setIsAmountDirty(true);
        if (!isValidAmount)
            return;
        const cartItem = {dish, quantity: amount};
        cartCtx.cartDispatch({type: CartActionKind.ADD_ITEM, payload: cartItem});
    }

    const amountInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setAmount(event.target.valueAsNumber);
        setIsAmountDirty(true);
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
                    <input type="number" min={0} onChange={amountInputHandler}/>
                    {shouldShowError && <p className='error'>Amount should be greater than 0</p>}
                </p>
                <p>
                    <button className={classes.addButton} onClick={addItem}>+Add</button>
                </p>
            </div>
        </div>
    );
}
 
export default DishItem;
