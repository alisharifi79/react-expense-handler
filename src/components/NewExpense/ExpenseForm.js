import { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm(props) {
  const [inputTitle, setInputTitle] = useState('');

  function titleChangeHandler(event) {
    setInputTitle(event.target.value);
  }
  const [inputAmount, setInputAmount] = useState('');

  function amountChangeHandler(event) {
    setInputAmount(event.target.value);
  }
  const [inputDate, setInputDate] = useState('');

  function dateChangeHandler(event) {
    setInputDate(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const expenseData = {
      title: inputTitle,
      amount: inputAmount,
      date: new Date(inputDate),
    };

    props.onSaveExpenseData(expenseData);
    setInputTitle('');
    setInputAmount('');
    setInputDate('');
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={inputTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={inputAmount}
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              value={inputDate}
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
}

export default ExpenseForm;
