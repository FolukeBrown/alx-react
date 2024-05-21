import React from "react";
import { shallow, mount } from "enzyme";
import CourseList from "./CourseList";
import { StyleSheetTestUtils } from 'aphrodite';

describe("Testing <CourseList />", () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  it("should render CourseList component without crashing", () => {
    let wrapper = shallow(<CourseList />);
    expect(wrapper.exists());
  });

  it("should CourseList renders the 3 different rows", () => {
    let wrapper = shallow(<CourseList />);
    expect(wrapper.find("CourseListRow")).toHaveLength(3);
  });

  it("should CourseList renders if the array pass empty or not exist", () => {
    const listCourses = [];
    let wrapper = shallow(<CourseList />);
    expect(wrapper.find('CourseListRow').last().props().textFirstCell).toEqual("No course available yet");
    wrapper = shallow(<CourseList listCourses={[]}/>);
    expect(wrapper.find('CourseListRow').last().props().textFirstCell).toEqual("No course available yet");
  });

});

describe("Testing <CourseList listCourses={listCourses}/>", () => {
  let wrapper;

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    const listCourses = [
      {id: 1, name: 'ES6', credit: 60},
      {id: 2, name: 'Webpack', credit: 20},
      {id: 3, name: 'React', credit: 40}
    ];
    wrapper = shallow(<CourseList listCourses={listCourses}/>);
  });

  it("should CourseList renders if the array pass empty or not exist", () => {
    expect(wrapper.findWhere((node)=>{return node.props().textFirstCell === "ES6"})).toHaveLength(1);
    expect(wrapper.findWhere((node)=>{return node.props().textFirstCell === "Webpack"})).toHaveLength(1);
    expect(wrapper.findWhere((node)=>{return node.props().textFirstCell === "React"})).toHaveLength(1);
  });
});
