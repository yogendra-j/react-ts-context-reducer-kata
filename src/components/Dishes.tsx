import { useEffect, useState } from "react";
import { TDish } from "../types/TDish";
import { getDishes } from "../apis/dishes";
import DishItem from "./DishItem";

const Dishes = () => {

    const [dishes, setDishes] = useState<TDish[]>([]);

    useEffect(() => {
      getDishes().then(setDishes);
    
    }, [])

    return ( 
        <>
        {dishes.map((dish) => <DishItem key={dish.id} dish={dish}/>)}
        </>
     );
}
 
export default Dishes;