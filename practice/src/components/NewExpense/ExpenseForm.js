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
    //    setUserInput({
    //     ...userInput, //기존의 value를 오버아리드해서 덮어쓸수있다. //최신이 보장되지 않는다.
    //     enteredTitle : event.target.value,
    //    })
       //리액트는 상태 업데이트를 즉시 처리하지 않고, 예약하기때문에
       //이전값을 받아와서 상태 처리해주는것이 제일 좋다.
       //(최신 상태 스냅샷을 업데이트 하도록 보장해 준다.)
       setUserInput((prevState) => {
        return {...prevState, enteredTitle : event.target.value};
       });
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
