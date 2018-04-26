import {createStore, combineReducers} from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

// Store creation

export default () =>{
    const store = createStore(
        combineReducers({
          expenses: expensesReducer, //expenses-- root state name , ref to expensesReducer
          filters: filtersReducer  //filters-- also root state name , ref to filtersReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      );
      return store;
};
