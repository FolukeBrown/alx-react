import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';


describe('Testing <Header /> Component', () => {
  let wrapper;

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    wrapper = shallow(<Header />);
  });

  it("should renders with out crashing", () => {
    expect(wrapper).toBeDefined();
  });

  it("should renders an h1 tag", () => {
    expect(wrapper.find('h1')).toBeDefined();
  });

  it("should renders an img tag", () => {
    expect(wrapper.find('img')).toBeDefined();
  });
});
