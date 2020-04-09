import React from 'react';
import { Link } from 'react-router-dom';
import { removeExpense, editExpense } from '../actions/expenses';

const ExpenseListItem = (props) => {
    console.log("ExpenseListItem props:", props);
    return (
        <div>
            <Link to={`/edit/${props.id}`}>
                <h3>{props.description}:</h3>
            </Link>
            <p>{props.amount} - {props.createdAt}</p>
            <p>{props.note}</p>
        </div>
    );
};

export default ExpenseListItem;