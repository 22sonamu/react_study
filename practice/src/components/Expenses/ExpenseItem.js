import ExpenseDate from "./ExpenseDate";
import "../Expenses/ExpenseItem.css";
import Card from "../UI/Card";
import {useState} from 'react';
function ExpenseItem({date, title, amount}) {
    const [titleState, setTitleSate] = useState(title);
    const clickHandler = () => {
        setTitleSate("clicked");
    };
    
    const month = date.toLocaleString('ko-KR', {month : 'long'});
    const day = date.toLocaleString('ko-KR', {day: '2-digit'});
    const year = date.getFullYear();
    return (
        <Card className="expense-item">
            <ExpenseDate date={date}/>
            <div className="expense-item__description">
                <h2>{titleState}</h2>
                <div className="expense-item__price">${amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    )
}
export default ExpenseItem;