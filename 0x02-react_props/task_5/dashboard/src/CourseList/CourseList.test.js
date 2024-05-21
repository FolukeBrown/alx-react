import { shallow } from 'enzyme';
import React from 'react';
import CourseList from './CourseList';


// shallow render CourseList component
describe('<CourseList />', () => {
	it(`should CourseList component without crashing`, () => {
		const wrapper = shallow(<CourseList />);
		expect(wrapper.exists()).toBe(true);
	})

	it(`should several CourseListRow Components`, () => {
		const wrapper = shallow(<CourseList />);
		expect(wrapper.find('CourseListRow').length).toBe(2);
	})
})