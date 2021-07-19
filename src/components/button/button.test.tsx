import React from 'react'
import {findByTestAttr} from "../../Utils";
import SharedButton, {buttonProps} from './'
import {shallow, ShallowWrapper } from 'enzyme';

describe('SharedButton Component', () => {

    describe('Renders', () => {
        let wrapper: ShallowWrapper;
        let mockFunc: jest.Mock<any, any>;
        beforeEach(() => {
            mockFunc = jest.fn();
            const props: buttonProps = {
                buttonText: "example text button",
                emitEvent: mockFunc
            }
            wrapper = shallow(<SharedButton {...props} /> )
        })
        it('Should Render a button', () => {
            const button = findByTestAttr(wrapper, 'buttonComponent')
            expect(button.length).toBe(1)
        })
        it('Should emit callback on click event', () =>{
            const button = findByTestAttr(wrapper, 'buttonComponent');
            // simulate on click event
            button.simulate('click');
            const callback = mockFunc.mock.calls.length;
            expect(callback).toBe(1)
        })
    })
});