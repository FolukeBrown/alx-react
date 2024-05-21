import { shallow } from 'enzyme';
import React from 'react';
import CourseList from './CourseList';


// shallow render CourseList component
describe('<CourseList />', () => {
	it(`should should  renders CourseList component without crashing`, () => {
		const wrapper = shallow(<CourseList />);
		expect(wrapper.exists()).toBe(true);
	})

	it(`should renders 5 CourseListRow components`, () => {
		const wrapper = shallow(<CourseList />);
		expect(wrapper.find('CourseListRow').length).toBe(5);
	})
})