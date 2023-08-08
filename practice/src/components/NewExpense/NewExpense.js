import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import ExpenseDate from '../Expenses/ExpenseDate';
export default function NewExpense({onAddExpense}){  
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData= {
            ...enteredExpenseData,
            id : Math.random().toString()
        };
        console.log(expenseData);
        onAddExpense(expenseData);
    }
    return (<div className="new-expense">
            <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler}/>
        </div>);
}