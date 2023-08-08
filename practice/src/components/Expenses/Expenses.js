import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card"
import ExpensesFilter from "../Filter/ExpensesFilter";
import { useState } from "react";
export default function () {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }
    const expense = [
        {
          id: 'e1',
          title : 'Toilet Paper',
          amount : 94.12,
          date : new Date(2021, 1, 11)
        },
        {
          id : 'e2',
          title : 'New TV',
          amout : 100.11,
          date : new Date(2022, 5, 30)
        },
        {
          id : 'e3',
          title: 'Car Insurance',
          amout : 20.9,
          date : new Date(2023, 1, 29)
        }
      ]
    return (
        <Card className="expenses">
            <ExpensesFilter selected ={filteredYear} onChangeFilter={filterChangeHandler}></ExpensesFilter>
            <p>Data for years 2019 , 2020 & 2022 is hidden</p>
            <ExpenseItem title={expense[0].title} date={expense[0].date} amount={expense[0].amount}></ExpenseItem>
            <ExpenseItem title={expense[1].title} date={expense[1].date} amount={expense[1].amount}></ExpenseItem>
        </Card>
    )
}