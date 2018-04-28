import React from 'react'
import {ExpensesSumary} from '../../components/ExpensesSumary';
import {shallow} from 'enzyme';
import expenses from '../fixtures/expenses';


test('should render ExpensesSumary with 1 expense',() => {
    const wrapper = shallow(<ExpensesSumary expenses = {[expenses[0]]} expensesTotal = {195} />);
    expect(wrapper).toMatchSnapshot();
   });

   test('should render ExpenseList with moltply  expensrs',() => {
       const wrapper = shallow(<ExpensesSumary expenses = {[expenses]} expensesTotal = {114195} />);
       expect(wrapper).toMatchSnapshot();
      });