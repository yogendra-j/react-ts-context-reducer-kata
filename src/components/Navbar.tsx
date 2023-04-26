import Cart from "./Cart";
import classes from './Navbar.module.css';

const Navbar = () => {
    return ( 
        <>
        <ul className={classes.navbar}>
            <li className={`${classes.appTitle} ${classes.navItem}`}>Food App</li>
            <li className={classes.navItem}>
                <Cart></Cart>
            </li>
        </ul>
        </>
     );
}
 
export default Navbar;