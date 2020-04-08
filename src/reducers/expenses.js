// Expenses Reducer:
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case "ADD_EXPENSE":
            return [
                // use the array spread operator or concat to not change the original array
                ...state, 
                action.expense
            ];
        case "REMOVE_EXPENSE":
            return state.filter(expense => expense.id !== action.id);
        case "EDIT_EXPENSE":
            return state.map(expense => {
                if (expense.id === action.id) {
                    return {
                      ...expense,
                      ...action.updates
                    };
                } else {
                    return expense;
                };
            });
        default:
            return state;
    }
};

export default expensesReducer;