import { useState } from "react";
import "./App.css";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Meals/Layout/Header";
import Meals from "./Components/Meals/Meals";
import CartProvider from "./Store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <div className="App">
      <CartProvider>
        {cartIsShown && <Cart hideHandler={hideCartHandler} />}
        <Header showHandler={showCartHandler} />
        <Meals />
      </CartProvider>
    </div>
  );
}

export default App;
