import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "./Card";

function ExpenseItem({date, title, amount}) {
    const month = date.toLocaleString('ko-KR', {month : 'long'});
    const day = date.toLocaleString('ko-KR', {day: '2-digit'});
    const year = date.getFullYear();
    return (
        <Card className="expense-item">
            <ExpenseDate date={date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${amount}</div>
            </div>
        </Card>
    )
}
export default ExpenseItem;