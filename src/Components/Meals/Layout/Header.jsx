import React from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <div>
      <div className={classes.header}>
        <h1>ReactMeals</h1>
        <div className={classes.buttonclass}>
        <HeaderCartButton showHandler={props.showHandler}/>
        </div>
        </div>
      

      <div className={classes["main-image"]}>
        <img
          src="https://beyondtype1.org/wp-content/uploads/2023/01/FAST-FOOD-CHAIN-NUTRITION-GUIDE-HEADER-1024x367.jpg"
          alt=""
        />
      </div>
     
    </div>
  );
};

export default Header;
