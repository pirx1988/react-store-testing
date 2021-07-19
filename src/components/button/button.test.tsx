import React from 'react'
import {findByTestAttr} from "../../Utils";
import SharedButton, {buttonProps} from './'
import {shallow, ShallowWrapper } from 'enzyme';

describe('SharedButton Component', () => {

    describe('Renders', () => {
        let wrapper: ShallowWrapper;
        beforeEach(() => {
            const props: buttonProps = {
                buttonText: "example text button",
                emitEvent: () => {}
            }
            wrapper = shallow(<SharedButton {...props} /> )
        })
        it('Should Render a button', () => {
            const button = findByTestAttr(wrapper, 'buttonComponent')
            expect(button.length).toBe(1)
        })
    })
});