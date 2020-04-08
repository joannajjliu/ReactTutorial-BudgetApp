import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';

import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const waterBill = store.dispatch(addExpense({
    description: "water bill",
    amount: 200,
    createdAt: 2000
}));

const gasBill = store.dispatch(addExpense({
    description: "gas bill",
    amount: 100,
    createdAt: 5000
}));

store.dispatch(setTextFilter('gas'));

ReactDOM.render(<AppRouter />, document.getElementById("app"));

// const demoState = {
//     expense: [{
//         id: "1273y12jbdfsd",
//         description: "January Rent",
//         note: "Final payment",
//         amount: 54500,
//         createdAt: 0
//     }],
//     filters: {
//         text: "rent",
//         sortBy: "amount", //date or amount
//         startDate: undefined,
//         endDate: undefined
//     }
// };
