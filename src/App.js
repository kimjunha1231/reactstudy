import React,{useState} from "react";
import Expenses from "./section3/Expenses/Expenses";
import NewExpense from "./section3/NewExpense/NewExpense";
const DUMMY_EXPENSES = [
  { id:'e1', title: "Toilet Paper", amount: 94.12, date: new Date(2020, 7, 14) },
  { id:'e2', title: "New Tv", amount: 799.49, date: new Date(2021, 2, 12) },
  { id:'e3', title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 28) },
  { id:'e4', title: "New Desk(Wooden)", amount: 450, date: new Date(2021, 5, 28) },
];
const App = () => {
  const [expenses,setExpenses]=useState(DUMMY_EXPENSES);
  const addExpenseHandler = expense =>{
    setExpenses(prevExpenses =>{
      return [expenses, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
