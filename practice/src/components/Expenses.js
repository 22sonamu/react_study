import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from './Card';
export default function () {
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
            <ExpenseItem title={expense[0].title} date={expense[0].date} amount={expense[0].amount}></ExpenseItem>
            <ExpenseItem title={expense[1].title} date={expense[1].date} amount={expense[1].amount}></ExpenseItem>
        </Card>
    )
}