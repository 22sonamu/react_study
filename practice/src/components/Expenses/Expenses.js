import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card"
import ExpensesFilter from "../Filter/ExpensesFilter";
import { useState } from "react";
export default function Expense({expense}) {
  const [filteredYear, setFilteredYear] = useState("2020");
  

 
  const filterChangeHandler = (expense) => {
    //이 함수가 동작하면, 컴포넌트가 재실행되면서 위의 if문이 동작한다.
    setFilteredYear(prevExpenses => {
      return [expense, ...prevExpenses]
    });
  }
  
    return (
        <Card className="expenses">
            <ExpensesFilter selected ={filteredYear} onChangeFilter={filterChangeHandler}></ExpensesFilter>
            {expense.map(expense => <ExpenseItem title={expense.title} amount = {expense.amount} date = {expense.date}/>)}
            
        </Card>
    )
 }