import { shallow } from 'enzyme';
import CourseList from './CourseList';


// shallow render CourseList component
describe('<CourseList />', () => {
	it(`should should  renders CourseList component without crashing`, () => {
		const wrapper = shallow(<CourseList />);
		expect(wrapper.exists()).toBe(true);
	})

	it(`should renders several CourseListRow Components`, () => {
		const wrapper = shallow(<CourseList />);
		expect(wrapper.find('CourseListRow').length).toBe(2);
	})
})