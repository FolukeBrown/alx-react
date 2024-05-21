import { shallow } from 'enzyme';
import React from 'react';
import App from './App';


describe('<App />', () => {
	it('should should renders without crashing', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.exists()).toBe(true);
	})
});
