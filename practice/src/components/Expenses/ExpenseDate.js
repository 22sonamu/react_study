import "./ExpenseDate.css";

export default function ExpenseDate({date}) {
    const month = date.toLocaleString('ko-KR', { month: 'long' });
    const day = date.toLocaleString('ko-KR', { day: '2-digit' });
    const year = date.getFullYear();
    return (
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
            <div  className="expense-date__Day">{day}</div>
        </div>
    );
}