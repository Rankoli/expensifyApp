import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from '../components/ExpenseForm';
import { startAddExpense, tryingToConnectDatabase } from '../actions/expenses';

export class AddExpensePage extends React.Component {

  onSubmit = (expense) => {
    this.props.startAddExpense(expense);
    this.props.history.push('/');
  };

  test = () => {
    this.props.tryingToConnectDatabase();
  }
//<button onClick={this.test}></button>
render() {
  return (
    <div>
      <div className="page-header">
        <div className="content-container">
          <h1 className="page-header__title">Add Expense</h1>
        </div>
      </div>
      <div className="content-container">
        <ExpenseForm onSubmit={this.onSubmit}/>
      </div>
    </div>
  );
}
}

const mapDispatchToProps = (dispatch) => ({
  startAddExpense: (expense) => dispatch(startAddExpense(expense)),
  tryingToConnectDatabase: () => dispatch(tryingToConnectDatabase())
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
