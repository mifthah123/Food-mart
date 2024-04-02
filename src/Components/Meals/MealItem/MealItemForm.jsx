import React, {  useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const[amountIsValid,setAmountIsValid]=useState(true)
  const amountInputRef = React.createRef()

  const submitHandler = (event)=>{
    event.preventDefault()
    const enteredAmount= amountInputRef.current.value
    const enteredAmountnumber = +enteredAmount

    if(enteredAmount.trim().length === 0||enteredAmountnumber<1||enteredAmountnumber>5){
      setAmountIsValid(false)
      return
    }
    props.onAddToCartHandler(enteredAmountnumber)
  }
  return (
    <div>
      <form action="" className={classes.form} onSubmit={submitHandler}>
        <Input
          ref={amountInputRef}
          label="Amount"
          input={{
            id: "Amount" + props.id,
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
        />
        <button>Add</button>
        {!amountIsValid&& <p>Please enter a valid amount(1-5)</p>}
      </form>
    </div>
  );
};

export default MealItemForm;
