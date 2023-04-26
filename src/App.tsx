import Home from "./components/Home";
import Navbar from "./components/Navbar";
import CartContextProvider from "./store/CartContextProvider";

const App = () => {
  return (
    <CartContextProvider>
      <Navbar />
      <Home />
    </CartContextProvider>
  );
}

export default App;