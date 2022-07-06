import React, { useState, useEffect } from "react";

import Expenses from "./components/Expenses/Expenses";

import "./App.css";
import NewExpense from "./components/NewExpense/NewExpense";

let DUMMY_Expense = [
  // {
  //   id: "e1",
  //   title: "school Fee",
  //   amount: 20,
  //   date: new Date(2022, 5, 12),
  // },
  // {
  //   id: "e2",
  //   title: "house Fee",
  //   amount: 250,
  //   date: new Date(2022, 5, 12),
  // },
  // {
  //   id: "e3",
  //   title: "college Fee",
  //   amount: 2,
  //   date: new Date(2022, 5, 12),
  // },
];

const App = () => {
  const[expenses ,setExpenses] = useState(DUMMY_Expense);

  function FetachData(){
    fetch('http://localhost:8000/post').then(
      response =>{
        return response.json();
      }
    ).then(
      data =>{
        console.log(data);
        setExpenses(data);
      }
    );
  }

  useEffect(()=>{
     
    FetachData();
   
  }, []);
 
  const addExpenseHandler = (expense) => {
      fetch('http://localhost:8000/post' ,{
        method : 'POST',
        body : JSON.stringify(expense),
        headers :{
          'content-Type' : 'application/json'
        }
      }).then(
        response =>{
          FetachData();
        }
      );
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
};

export default App;
