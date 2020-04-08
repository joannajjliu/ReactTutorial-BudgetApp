import React from 'react';
import ReactDOM from 'react-dom';

//provides store to ALL components making up application, without passing it around:
import { Provider } from 'react-redux'; 

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
    amount: 4500
}));

const gasBill = store.dispatch(addExpense({
    description: "gas bill",
    createdAt: 1000
}));

const rentBill = store.dispatch(addExpense({
    description: "rent",
    amount: 109500
}));

// store.dispatch(setTextFilter('gas'));

// setTimeout(() => {
//     store.dispatch(setTextFilter('bill'));
// }, 3000);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));

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
