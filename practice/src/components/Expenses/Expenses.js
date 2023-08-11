import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card"
import ExpensesFilter from "../Filter/ExpensesFilter";
import { useState } from "react";
export default function Expense() {
  const [filteredYear, setFilteredYear] = useState("2020");
  let filterInfoText = '2019, 2021 & 2022'

  if(filteredYear === '2019'){
    filterInfoText = '2020, 2021 & 2022';
  }if(filteredYear === '2020'){ 
    filterInfoText = '2019, 2021 & 2022';
  }if(filteredYear === '2021'){
    filterInfoText = '2019, 2020 & 2022';
  }if(filteredYear ==='2022'){
    filterInfoText = '2019, 2020 & 2021';
  }
  const filterChangeHandler = (filteredYear) => {
    //이 함수가 동작하면, 컴포넌트가 재실행되면서 위의 if문이 동작한다.
    setFilteredYear(filteredYear);
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
            {expense.map(expense => <ExpenseItem title={expense.title} amount = {expense.amount} date = {expense.date}/>)}
            
        </Card>
    )
}