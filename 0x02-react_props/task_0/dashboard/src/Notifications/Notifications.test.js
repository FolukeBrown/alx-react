import { shallow } from 'enzyme';
import Notifications from './Notifications';


describe('Notifications', () => {
	it('should should renders without crashing', () => {
		const wrapper = shallow(<Notifications />);
		expect(wrapper.exists()).toBe(true);
	})

	it('should renders three list items', () => {
		const wrapper = shallow(<Notifications />);
		expect(wrapper.find('li').length).toBe(3);
	})

	it('should renders the text "Here is the list of notifications"', () => {
		const wrapper = shallow(<Notifications />);
		expect(wrapper.find('p').text()).toBe('Here is the list of notifications');
	})
});