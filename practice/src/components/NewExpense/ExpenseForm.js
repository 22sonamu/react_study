import './ExpenseForm.css';
import {useState, userState} from "react";
const ExpenseForm = () => {
    // const [enteredTitle , setEnteredTitle] = useState('');
    // const [enteredAmount, setEnteredAmount] = useState('');
    // const [enteredDate, setEnteredDate] = useState('');
    const [userInput , setUserInput] = useState({
        enteredTitle : '',
        enteredAmount : '',
        enteredDate : ''
    });
    const titleChangeHandler = (event) => {
       setUserInput({
        ...userInput, //기존의 value를 오버아리드해서 덮어쓸수있다.
        enteredTitle : event.target.value,
       })
    };
    const amountChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredAmount : event.target.value,
           })
    };
    const dateChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredDate : event.target.value,
           })
    }
    return (
       <form>
            <div className='new-expense__controls'>
                <div className='new-expense__controls'>
                        <label>Title</label>
                        <input type="text" onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense__controls'>
                        <label>Amount</label>
                        <input type="number"  min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>
                <div className='new-expense__controls'>
                        <label>Date</label>
                        <input type="date"  min="2019-01-01" max="2023-12-31" onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className='new-expense_actions'>
                <button type="submit">
                    Add Expense
                </button>
            </div>
       </form> 
    );
};

export default ExpenseForm;
