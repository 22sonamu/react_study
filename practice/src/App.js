
import Expenses from "./components/Expenses/Expenses";
import ExpensesFilter from "./components/Filter/ExpensesFilter";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";
const DUMMY_EXPENSES= [
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
function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    });
  };
  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses expense={expenses}/>
    </div>
  );
}

export default App;
