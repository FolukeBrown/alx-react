import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';


describe('<Notifications />', () => {
	it('should should renders without crashing', () => {
		const wrapper = shallow(<Notifications />);
		expect(wrapper.exists()).toBe(true);
	})

	it('should checks first Item renders correct html', () => {
		const wrapper = shallow(<Notifications />);
		expect(wrapper.text()).toContain('Your notifications');
	})

	it('should rendered when displayDrawer is false', () => {	
		const wrapper = shallow(<Notifications displayDrawer={false} />);
		expect(wrapper.find('.menuItem').length).toBe(1);
	})

	it('should not rendered when displayDrawer is false', () => {
		const wrapper = shallow(<Notifications displayDrawer={false} />);
		expect(wrapper.find('.Notifications').length).toBe(0);
	})

	it('should rendered when displayDrawer is true', () => {
		const wrapper = shallow(<Notifications displayDrawer listNotifications={[]} />);
		expect(wrapper.find('.menuItem').length).toBe(1);
	})

	it('should rendered when displayDrawer is true', () => {
		const wrapper = shallow(<Notifications displayDrawer listNotifications={[]} />);
		wrapper.update()
		const item = wrapper.find('div.Notifications');
		expect(item.length).toBe(1);
	})

	it('should passing empty array', () => {
		const wrapper = shallow(<Notifications notifications={[]} />);
		expect(wrapper.find('.NotificationItem').length).toBe(0);
	})

	it('should passing NO array', () => {
		const wrapper = shallow(<Notifications />);
		expect(wrapper.find('.NotificationItem').length).toBe(0);
	})
});