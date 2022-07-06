import "./ExpenseItem.css";

import ExpenseDate from "./ExpenseDate";

// import Card from "../UI/Card";

const ExpenseItem = (props) => {
 

//   const [newTitle , setNewTitle] = useState("hi");
//   const changeHandler = (event) =>{
//        setNewTitle(event.target.value);
//   }
  
//  const [title , setTitle] = useState(props.title);
//   const clickHandler = () => { 
//     setTitle(newTitle);
//   };

 
  return (
    <div className="expense-item">
      <ExpenseDate date ={new Date(props.date)}/>
      <div className="expense-item__description">
        <h2>{ props.title  }</h2>
      </div>
      <div className="expense-item__price">₹{props.amount}</div>
       
    </div>
  );
};

export default ExpenseItem;
