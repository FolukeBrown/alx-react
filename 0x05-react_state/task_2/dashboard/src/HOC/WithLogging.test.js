import React from "react";
import { mount } from 'enzyme';
import { jest } from '@jest/globals';
import WithLogging from "./WithLogging";
import Login from '../Login/Login';
import { StyleSheetTestUtils } from 'aphrodite';

describe("Testing WithLogging HOC", () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  it("should call console.log on mount and on unmount", () => {
    console.log = jest.fn();
    const Hoc = WithLogging(() => <p>Hello there</p>);
    const comp = <Hoc title="hello" />;
    let wrapper = mount(comp);
    expect(console.log).toBeCalledWith('Component Component is mounted');
    wrapper.unmount();
    expect(console.log).toBeCalledWith('Component Component is going to unmount');
    jest.restoreAllMocks();
  });

  it("should call console.log on mount and on unmount", () => {
    console.log = jest.fn();
    const Hoc = WithLogging(Login);
    const comp = <Hoc/>;
    let wrapper = mount(comp);
    expect(console.log).toBeCalledWith('Component Login is mounted');
    wrapper.unmount();
    expect(console.log).toBeCalledWith('Component Login is going to unmount');
    jest.restoreAllMocks();
  });

});
