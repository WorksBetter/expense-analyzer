
import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) =>{

    const [showForm, setShowForm] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    }
    
    const stopEditing = () => {
        setShowForm(false);
    }
 
    const onAddButtonClickHandler = () =>{
        setShowForm(true);
    }
   
    return(
        <div className='new-expense'>
            {showForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} toggleForm={stopEditing} />}
            {!showForm && <button onClick={onAddButtonClickHandler}>Add New Expense</button>}
        </div>
    )
}

export default NewExpense;