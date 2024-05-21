import { shallow } from 'enzyme';
import Notifications from './Notifications';


describe('Notifications', () => {
	it('should should renders without crashing', () => {
		const wrapper = shallow(<Notifications />);
		expect(wrapper.exists()).toBe(true);
	})

	it('should renders <NotificationItem /> elements', () => {
		const wrapper = shallow(<Notifications />);
		expect(wrapper.exists('NotificationItem')).toBe(true);
	})

	it('should renders correct html', () => {
		const wrapper = shallow(<Notifications />);
		expect(wrapper.html()).toContain('New course available');
	})
});