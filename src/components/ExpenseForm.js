import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const [showExpenseForm, setShowExpenseForm] = useState(false);

  // Alternative way of managing react state in One go instead of using multiple states. please refer below

  //   const [userInput, SetUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    //console.log(event.target.value);
    // below is one way of updating state but it still doesn't work correctly
    // SetUserInput({
    //   ...userInput,
    //   enterredTitke: event.target.value,
    // });

    // Correct way of updating state when we have to update the state which is depending on the previous state
    // SetUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    //console.log(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    //console.log(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    // console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
    setShowExpenseForm(false);
  };

  const displayExpenseForm = (event) => {
    console.log("Display expense form");
    setShowExpenseForm(true);
  };

  const removeExpenseForm = (event) => {
    setShowExpenseForm(false);
  };

  return (
    <>
      {!showExpenseForm && (
        <div className="add-button">
          <button type="submit" onClick={displayExpenseForm}>
            Add Expense
          </button>
        </div>
      )}
      {showExpenseForm && (
        <form className="expense-form" onSubmit={submitHandler}>
          <div>
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div>
            <label>Amount</label>
            <input
              type="number"
              value={enteredAmount}
              onChange={amountChangeHandler}
            />
          </div>
          <div>
            <label>Date</label>
            <input
              type="date"
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
          <div className="button_div">
            <button type="submit">Add Expense</button>
            <button type="submit" onClick={removeExpenseForm}>
              cancel
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default ExpenseForm;
