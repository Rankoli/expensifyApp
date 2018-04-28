import React from 'react';
import ExpenseList from '../components/ExpenseList';
import ExpenseListFilters from '../components/ExpenseListFilters';
import ExpensesSumary from '../components/ExpensesSumary';

const ExpenseDashboardPage = () => (
  <div>
   <ExpenseList />
   <ExpensesSumary />
   <ExpenseListFilters />
  </div>
);


export default ExpenseDashboardPage;
