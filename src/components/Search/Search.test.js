import { shallow } from 'enzyme';
import { Component } from 'react';
import { findTestByAttr } from '../Utils';
import SearchComp from './SearchComp'

const setUp = (props = {}) => {
    const wrapper = shallow(<SearchComp {...props} />)
}

describe("search Component", () => {
    let component;
    beforeEach(() => {
        Component = setUp();
    });

    it("should render without errors", () => {
        const wrapper = findTestByAttr(component, "headerTest");
        expect(wrapper.length).toBe(1);
    })
});
