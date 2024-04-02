import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../Store/Cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$ ${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
  console.log(cartCtx.orderItem);
  console.log(cartCtx.addItem);
  // const orderItemHandler =(item)=>{
  //   cartCtx.orderItem()
  // }
  const cartItemremoveHandler = (id) => {
    cartCtx.removeItem(id)
  };
  const cartItemAddHandler = (item) => {
    console.log("*****************",item);
cartCtx.addItem({...item,amount:1})
  };
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((items) => (
        <li>
          <CartItem
            key={items.id}
            name={items.name}
            amount={items.amount}
            price={items.price}
            onRemove={cartItemremoveHandler.bind(null,items.id)}
            onAdd={cartItemAddHandler.bind(null,items)}
          />
        </li>
      ))}
    </ul>
  );
  return (
    <Modal hideHandler={props.hideHandler}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.hideHandler}>
          close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};
      
export default Cart;
