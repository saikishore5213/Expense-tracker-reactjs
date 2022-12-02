import React from "react";
import "../components/ExpenseDate.css";

const ExpenseDate = (props) => {
  const expenseMonth = props.date.toLocaleString("en-US", { month: "long" });
  const expenseDay = props.date.toLocaleString("en-US", { day: "2-digit" });
  const expenseYear = props.date.getFullYear();
  return (
    <div className="expense-date">
      <h2>{expenseMonth}</h2>
      <h2>{expenseDay}</h2>
      <h2>{expenseYear}</h2>
    </div>
  );
};

export default ExpenseDate;
