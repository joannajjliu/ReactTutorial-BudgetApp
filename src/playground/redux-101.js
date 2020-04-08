import { createStore } from 'redux';

// destructuring example:
const add = ({a, b}, c) => {
    return a + b + c;
};

console.log(add({a: 1, b: 12}, 100));

// Action generators - functions that return action objects:
const incrementCount = ({ incrementBy = 1 } = {} ) => ({
        type: "INCREMENT",
        incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {} ) => ({
    type: "DECREMENT",
    decrementBy
});

const resetCount = () => ({
    type: "RESET"
});

const setCount = ( { count } = {} ) => ({
    type: "SET",
    count
});

// Reducers:
// 1. Reducers are pure functions (ouput solely determined by input (state & action))
// 2. Never change input (state or action)

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                count: state.count + action.incrementBy
            };
        case "DECREMENT":
            return {
                count: state.count - action.decrementBy
            };
        case "SET": 
            return {
                count: action.count
            };
        case "RESET":
            return {
                count: 0
            };
        default:
            return state;
    }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    // subscribe does something everytime store changes
    // return value of store.subscribe, is unsubscribe
    console.log(store.getState());
});

// store.dispatch({
//     type: "INCREMENT",
//     incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 7 }));

store.dispatch(incrementCount());


store.dispatch(resetCount());

// unsubscribe(); //unsubscribes after above action

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 101 }));