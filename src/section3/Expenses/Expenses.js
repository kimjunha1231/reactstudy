import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter";
import "./Expenses.css";
import Card from "../UI/Card";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  let filterInfoText = "2019, 2021 & 2022";

  if (filteredYear === "2019") {
    filterInfoText("2020, 2021 & 2022");
  } else if (filteredYear === "2021") {
    filterInfoText("2019, 2021 & 2022");
  } 
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {props.items.map((expense) => (<ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}/>))}
      

    </Card>
  );
};
export default Expenses;
