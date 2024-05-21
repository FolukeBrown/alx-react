import React from 'react';
import { shallow, mount } from 'enzyme';
import { jest } from '@jest/globals';
import App from './App';
import { StyleSheetTestUtils } from 'aphrodite';
import { AppContext, user, logOut } from './AppContext';

describe('Test App.js', () => {
  let wrapper;

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    wrapper = shallow(<App />);
  });

  it('should renders App without crashing', () => {
    expect(wrapper.exists());
  });

  it('should contains Notifications component', () => {
    expect(wrapper.find("Notifications")).toHaveLength(1);
  });

  it('should contains Header component', () => {
    expect(wrapper.find("Header")).toHaveLength(1);
  });

  it('should contains Login component', () => {
    expect(wrapper.find("Login")).toHaveLength(1);
  });

  it('should contains Footer component', () => {
    expect(wrapper.find("Footer")).toHaveLength(1);
  });

  it('CourseList should not displayed inside App', () => {
    expect(wrapper.find("CourseList")).toHaveLength(0);
  });
});

describe("Testing <App isLoggedIn={true} />", () => {
  let wrapper;

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    wrapper = shallow(<App/>);
  });

  it("the Login component is  included", () => {
    expect(wrapper.find('Login')).toHaveLength(1);
  });

  it("should not include the CourseList component", () => {
    expect(wrapper.find('CourseList').exists());
  });
});

describe("Testing <App logOut={function} />", () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  it("should listing to h keyboard", () => {
    const wrapper = mount(<App logOut={()=>{console.log("ctrl and h are pressed")}}/>);
    window.alert = jest.fn();
    const inst = wrapper.instance();
    const logout = jest.spyOn(inst, 'logOut');
    const alert = jest.spyOn(window, 'alert');
    const event = new KeyboardEvent('keydown', {bubbles:true, ctrlKey: true, key: 'h'});
    document.dispatchEvent(event);
    expect(alert).toBeCalledWith("Logging you out");
    expect(logout).toBeCalled();
    alert.mockRestore();
  });
});

describe("Testing App Component's State />", () => {
  let wrapper;

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    wrapper = shallow(<App/>);
  });

  afterEach(() => {
		jest.clearAllMocks();
	});

  it('should value of displayDrawer in state is false', () => {
    expect(wrapper.state('displayDrawer')).toBe(false);
  });

  it('should value of the state is false', () => {
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state('displayDrawer')).toBe(true);
  });

  it('should value of the state updated to false', () => {
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state('displayDrawer')).toBe(false);
  });

  it(`Tests that the logIn function updates user's state correctly`, () => {
		wrapper = mount(
			<AppContext.Provider value={{ user, logOut }}>
				<App />
			</AppContext.Provider>
		);

		const myUser = {
			email: 'testy@gmail.com',
			password: 'testy',
			isLoggedIn: true,
		}

		expect(wrapper.state().user).toEqual(user);
		const instance = wrapper.instance();
		instance.logIn(myUser.email, myUser.password);
		expect(wrapper.state().user).toEqual(myUser);
		wrapper.unmount();
	})

	it(`Tests that the logOut function updates user's state correctly`, () => {
		wrapper = mount(
			<AppContext.Provider value={{ user, logOut }}>
				<App />
			</AppContext.Provider>
		);

		const myUser = {
			email: 'testy@gmail.com',
			password: 'testy',
			isLoggedIn: true,
		}

		expect(wrapper.state().user).toEqual(user);
		const instance = wrapper.instance();
		instance.logOut();
		expect(wrapper.state().user).toEqual(user);
		wrapper.unmount();
	})

  it(`verify that markNotificationAsRead works as intended,
	deletes the notification with the passed id from the listNotifications array`, () => {
		const context = {
			user: {
				...user,
			},
			logOut: jest.fn(),
			listNotifications: [
				{ id: 1, type: "default", value: "New course available" },
				{ id: 2, type: "urgent", value: "New resume available" },
				{ id: 3, html: { __html: jest.fn() }, type: "urgent" }
			]
		}

		const wrapper = mount(
			<AppContext.Provider value={context}>
				<App />
			</AppContext.Provider>
		);

		const instance = wrapper.instance();

		instance.markNotificationAsRead(3);

		expect(wrapper.state().listNotifications).toEqual([
			{ id: 1, type: "default", value: "New course available" },
			{ id: 2, type: "urgent", value: "New resume available" }
		]);
	
		expect(wrapper.state().listNotifications.length).toBe(2);
		expect(wrapper.state().listNotifications[3]).toBe(undefined);

		wrapper.unmount();
	})
});
