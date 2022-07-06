import React from "react";
// import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  return (
    <div className="expenses">
      {props.item.map((expense) => (
         <ExpenseItem
         key={expense.id} 
         date={expense.date}
         title={expense.title}
         amount={expense.amount}
       />
      ))}
    </div>
  );
}

export default Expenses;
