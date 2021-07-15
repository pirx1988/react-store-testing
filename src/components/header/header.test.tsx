import React from 'react'
import {shallow, ShallowWrapper} from 'enzyme'
import Header from './index'
import { findByTestAttr } from '../../Utils'
const setUp = (props={}): ShallowWrapper => {
    return shallow(<Header {...props}/>);
}

describe('Header Component', () => {

    let component: ShallowWrapper;
    beforeEach(() => {
        component = setUp();
    })

    it('It should render without errors', () => {
        // szukam klasy
        const wrapper = findByTestAttr(component,'headerComponent')
        // sprawdzam czy tylko jedna taka klasa jest
        expect(wrapper.length).toBe(1);
        //console log, który pokazuje wyrenderowany komponent
        // console.log(component.debug())
    });

    it('Should render a logo', () => {
        const wrapper = findByTestAttr(component,'logoIMG');
        expect(wrapper.length).toBe(1);
    })
})

