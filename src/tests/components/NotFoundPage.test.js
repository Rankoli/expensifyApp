import React from 'react'
import NotFoundPage from '../../pages/NotFoundPage';
import {shallow} from 'enzyme';

test('should run notfound page', () => {
const wrapper = shallow(<NotFoundPage />);
expect(wrapper).toMatchSnapshot();
});