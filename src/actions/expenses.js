import uuid from 'uuid';
import database from '../firebase/firebase';
import axios from 'axios';
import Api from '../../server/api';

// ADD_EXPENSE
 export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
  });

  export const startAddExpense = (expenseData = {}) => {
    return (dispatch, getState) => {
      const uid = getState().auth.uid;
      const {
        description = '', note = '', amount = 0, createdAt = 0
      } = expenseData
      const expense = {description, note, amount, createdAt};

    return database.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
        dispatch(addExpense({
          id: ref.key,
          ...expense
        }));
      });
    };
  };

  export const testReducer = () => ({
    type: 'TEST_T'
  });

  export const tryingToConnectDatabase = () => {
    return (dispatch) => {
        return Api.post("/Login",{email: 'rankoli3@gmail.com',pass: '123456'}).then((Response) => {
          dispatch(testReducer());
          console.log(Response.data.d);
          const user = JSON.parse(Response.data.d);
          console.log(user.Email, user.Password);
        }).catch((error) => {
          console.log(error);
        })
    };
  };

  // REMOVE_EXPENSE
 export  const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
      id: id
  });

  export const startRemoveExpense = ({ id = {}}) => {
    return (dispatch, getState) => {
      const uid = getState().auth.uid;
      return database.ref(`users/${uid}/expenses/${id}`).remove().then(() => {
        dispatch(removeExpense({id}));
      });
    };
  };

  // EDIT_EXPENSE
 export  const editExpense = (id,updates) => ({
   type: 'EDIT_EXPENSE',
   id,
   updates
  });

  export const startEditExpense = (id,updates) => {
    return (dispatch, getState) => {
      const uid = getState().auth.uid;
      return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(() =>{
        dispatch(editExpense(id,updates));
      });
    };
  };

  //SET_EXPENSES
  export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
  });

  export const startSetExpenses = () => {
    return (dispatch, getState) => {
      const uid = getState().auth.uid;
    //fetching expenses from database and parse them to array
     return database.ref(`users/${uid}/expenses`).once('value').then((snapshot) => {
        const expenses = [];
        snapshot.forEach( (childSnapshot) => {
          expenses.push({
           id: childSnapshot.key,
           ...childSnapshot.val()
         });
        });
        dispatch(setExpenses(expenses));
      });
    };
  };

