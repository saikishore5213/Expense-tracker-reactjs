import React, { useState } from "react";
import "../components/ExpenseItem.css";
import Card from "./Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle("Updated");
    //console.log("updated");
  };
  return (
    <Card className="expense-item__container">
      <div className="expense-date-title">
        <ExpenseDate date={props.date} />
        <p>{props.title}</p>
      </div>
      <div className="expense-item__price">
        <p>$ {props.amount}</p>
        {/* <button onClick={clickHandler}>click me</button> */}
      </div>
    </Card>
  );
};

export default ExpenseItem;
