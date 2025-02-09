const ExpenseList = ({ expenses, onDeleteExpense }) => {
    return (
      <div>
        <h3>Expense List</h3>
        <ul>
          {expenses.map((expense) => (
            <li key={expense.id}>
              {expense.title} - ${expense.amount}
              <button onClick={() => onDeleteExpense(expense.id)}>❌</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default ExpenseList;
  