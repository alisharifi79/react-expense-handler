import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

function NewExpense(props) {
  function saveExpenseDataHandler(inputExpenseData) {
    const expenseData = {
      ...inputExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpenseData(expenseData);
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}
export default NewExpense;
