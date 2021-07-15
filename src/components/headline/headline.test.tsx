import React from 'react'
import {shallow, ShallowWrapper} from 'enzyme';
import Headline, {HeadlineProps} from "./";

import {findByTestAttr} from './../../Utils'

const setUp = (props: HeadlineProps ) => {
    const component = shallow(<Headline {...props}/>);
    return component;
}

describe('Headline component', () => {
    describe('Have props', () => {
        let wrapper: ShallowWrapper;
        beforeEach(() => {
            const props = {
                header: 'Test Header',
                desc: 'Test Desc'
            }
            wrapper = setUp(props);
        })

        it('Should render without errors', () => {
            const component = findByTestAttr(wrapper, 'HeadlineComponent');
            expect(component.length).toBe(1);
        })

        it('Should render a H1', () => {
            const component = findByTestAttr(wrapper, 'header');
            expect(component.length).toBe(1);
        })
        it('Should render a description', () => {
            const component = findByTestAttr(wrapper, 'desc');
            expect(component.length).toBe(1);
        })

    })

    describe('Have no props', () => {
        let wrapper: ShallowWrapper;
        beforeEach(() => {
            wrapper = setUp({});
        })

        it(`Shouldn't render a H1`, () => {
            const component = findByTestAttr(wrapper, 'header');
            expect(component.length).toBe(0);
        });

        it(`Shouldn't render a description`, () => {
            const component = findByTestAttr(wrapper, 'desc');
            expect(component.length).toBe(0);
        })
    });
})