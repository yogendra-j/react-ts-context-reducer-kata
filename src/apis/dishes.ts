import { TDish } from "../types/TDish";

export const getDishes: () => Promise<TDish[]> = async () => {
    await new Promise(
        resolve => setTimeout(resolve, 500))
    return dishesData;
}

const dishesData = [
    {
        id: 1,
        name: "Spaghetti Bolognese",
        description: "Classic Italian pasta dish with a rich and flavorful meat sauce.",
        price: 12.99,
    },
    {
        id: 2,
        name: "Caesar Salad",
        description: "Crisp romaine lettuce, Parmesan cheese, and croutons tossed in a creamy Caesar dressing.",
        price: 7.99,
    },
    {
        id: 3,
        name: "Margherita Pizza",
        description: "Classic pizza with tomato sauce, fresh mozzarella, basil, and olive oil.",
        price: 10.99,
    },
    {
        id: 4,
        name: "Grilled Salmon",
        description: "Fresh grilled salmon served with a side of garlic mashed potatoes and steamed asparagus.",
        price: 18.99,
    },
    {
        id: 5,
        name: "Tiramisu",
        description: "Delicious Italian dessert made with layers of coffee-soaked ladyfingers and a rich mascarpone cream.",
        price: 6.99,
    },
];