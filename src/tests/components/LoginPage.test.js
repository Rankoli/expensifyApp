import React from 'react';
import {shallow} from 'enzyme';
import {LoginPage} from '../../pages/LoginPage';

test('should render loginPage', () => {
const wrapper = shallow( <LoginPage startLogin = {() => {}} /> );
expect(wrapper).toMatchSnapshot();
});