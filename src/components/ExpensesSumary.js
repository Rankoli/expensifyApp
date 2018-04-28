import React from 'react';
import { connect } from 'react-redux';
import SelectExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';



export const ExpensesSumary = (props) => (
    <div>
    {
      props.expenses.length === 1 ? (
           <h1>Viewing {props.expenses.length} expense totaling {numeral(props.expensesTotal/100).format('$0,0.00')} </h1>
      ) : (

           <h1>Viewing {props.expenses.length} expenses totaling {numeral(props.expensesTotal/100).format('$0,0.00')} </h1>
      )
    }

    </div>
    );


const mapStateToProps = (state) => {
    return {
      expenses: SelectExpenses(state.expenses, state.filters),
      expensesTotal:getExpensesTotal(state.expenses)
    };
  };

  export default connect(mapStateToProps)(ExpensesSumary);