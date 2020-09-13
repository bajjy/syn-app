import 'jsdom-global/register';
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from 'react';
import App from './App';

configure({ adapter: new Adapter() });

const sum = function sum(a, b) {
    return a + b
};

test('adds 1 + 8 to equal 9', () => {
    expect(sum(1, 8)).toBe(9)
});

it("renders correctly", () => {
   shallow(<App />);
});

it("renders header", () => {
   const wrapper = shallow(<App />);
   const welcome = <h1>modal below</h1>;
   expect(wrapper.contains(welcome)).toEqual(true);
});

test('modal is showing', () => {
    const wrapper = mount(<App />);
    const modalButton = wrapper.find('.modal-clicks button');

    modalButton.simulate('click');

    wrapper.update();

    expect(wrapper.find('CustomModal').length).not.toBe(0);

});