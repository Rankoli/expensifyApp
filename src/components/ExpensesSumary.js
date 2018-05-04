import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import { Link } from "react-router-dom";
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';



export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses' ;
  const formattedExpensesTotal = numeral(expensesTotal / 100).format('0,0.00');
return (
  <div className="page-header">
    <div className="content-container">
      <h1 className="page-header__title">Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>&#8362;{formattedExpensesTotal}</span></h1>
      <div className="page-header__actions">
        <Link className="button" to="/create">Add Expense</Link>
      </div>
    </div>
  </div>
);
};

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);

  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);


// import React from 'react';
// import { connect } from 'react-redux';
// import SelectExpenses from '../selectors/expenses';
// import getExpensesTotal from '../selectors/expenses-total';
// import numeral from 'numeral';



// export const ExpensesSumary = (props) => (
//     <div>
//     {
//       props.expenses.length === 1 ? (
//            <h1>Viewing {props.expenses.length} expense totaling {numeral(props.expensesTotal/100).format('$0,0.00')} </h1>
//       ) : (

//            <h1>Viewing {props.expenses.length} expenses totaling {numeral(props.expensesTotal/100).format('$0,0.00')} </h1>
//       )
//     }

//     </div>
//     );


// const mapStateToProps = (state) => {
//     return {
//       expenses: SelectExpenses(state.expenses, state.filters),
//       expensesTotal:getExpensesTotal(state.expenses)
//     };
//   };

//   export default connect(mapStateToProps)(ExpensesSumary);