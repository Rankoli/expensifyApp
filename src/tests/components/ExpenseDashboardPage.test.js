import React from 'react'
import ExpenseDashboardPage from '../../pages/ExpenseDashboardPage';
import {shallow} from 'enzyme';

test('should run Expense Dashboard page', () => {
const wrapper = shallow(<ExpenseDashboardPage />);
expect(wrapper).toMatchSnapshot();
});