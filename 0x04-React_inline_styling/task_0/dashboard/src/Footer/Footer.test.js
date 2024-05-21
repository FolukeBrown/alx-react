import { shallow } from 'enzyme';
import React from 'react';
import Footer from './Footer';


describe('<Footer />', () => {
	it('should tests that Footer shouldrenders without crashing', () => {
		const wrapper = shallow(<Footer />);
		expect(wrapper.exists()).toBe(true);
	})

	it('should contains the text "Copyright"', () => {
		const wrapper = shallow(<Footer />);
		expect(wrapper.text()).toContain('Copyright');
	})
});