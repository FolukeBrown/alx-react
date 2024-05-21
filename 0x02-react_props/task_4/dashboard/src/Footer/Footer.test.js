import { shallow } from 'enzyme';
import React from 'react';
import Footer from './Footer';


describe('<Footer />', () => {
	it('should should renders without crashing', () => {
		const wrapper = shallow(<Footer />);
		expect(wrapper.exists()).toBe(true);
	})

	it('should contains the text "Copyright"', () => {
		const wrapper = shallow(<Footer />);
		expect(wrapper.text()).toContain('Copyright');
	})
});