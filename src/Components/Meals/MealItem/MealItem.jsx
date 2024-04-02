import React, { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../Store/Cart-context";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const addToCarthandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  const price = `$ ${props.price.toFixed(2)}`;
  return (
    <div>
      <li className={classes.meal}>
        <div>
          <h3>{props.name}</h3>
          <div className={classes.description}>{props.description}</div>
          <div className={classes.price}>{price}</div>
        </div>
        <div>
          <MealItemForm id={props.id} onAddToCartHandler={addToCarthandler} />
        </div>
      </li>
    </div>
  );
};

export default MealItem;
