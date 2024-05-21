import { shallow, mount } from '../../config/setupTests';
import { StyleSheetTestUtils } from 'aphrodite';
import App from './App';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import NotificationItem from '../Notifications/NotificationItem';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';

window.alert = jest.fn();


describe('<App />', () => {
	beforeEach(() => {
		StyleSheetTestUtils.suppressStyleInjection();
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	it('should should renders without crashing', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.exists()).toBe(true);
	})

	it('should contains Header component', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find('Header').length).toBe(1);
	})

	it('should contains Login component', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.contains(<Login />)).toBe(true);
	})

	it('should contains Footer component', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find('Footer').length).toBe(1);
	})

	it('should tests that CourseList is not displayed', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find('CourseList').length).toBe(0);
	})

	it('should tests that <Notifications /> is not displayed', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.contains(<Notifications />)).toBe(false);
	})

	it('should tests that <Notificationitem /> is not displayed', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.contains(<NotificationItem />)).toBe(false);
	})

	it('should tests that the correct amount of <BodySection /> and <BodySectionWithMargin /> are displayed', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find(BodySection).length).toBe(1);
		expect(wrapper.find(BodySectionWithMarginBottom).length).toBe(1);
	})
});


describe('<App />', () => {
	beforeEach(() => {
		StyleSheetTestUtils.suppressStyleInjection();
	});

	it('should tests that the Login component is not rendered when isLoggedIn is true', () => {
		const wrapper = shallow(<App isLoggedIn={true} />);
		expect(wrapper.contains(<Login />)).toBe(false);
	})

	it('should tests that CourseList component is rendered when isLoggedIn is false', () => {
		const wrapper = shallow(<App isLoggedIn />);
		expect(wrapper.find('CourseList').length).toBe(1);
	})

	it(`should verifies that alert is called when ctrl-h is pressed`, () => {
		const wrapper = mount(<App isLoggedIn />);
		wrapper.instance().keyDownHandler = window.alert;
		wrapper.instance().keyDownHandler({ keyCode: 72, ctrlKey: true });
		expect(window.alert).toHaveBeenCalled();
	})

	it(`should verifies that logOut function is called when ctrl-h is pressed`, () => {
		const ConsoleSpy = jest.spyOn(global.console, 'log');
		const wrapper = mount(<App isLoggedIn />);
		wrapper.instance().keyDownHandler({ keyCode: 72, ctrlKey: true });
		expect(ConsoleSpy).toHaveBeenCalledWith('logOut function console log for testing');
		wrapper.unmount();
	})

})
