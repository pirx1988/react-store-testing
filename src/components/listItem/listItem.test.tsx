import React from 'react'
import {shallow, ShallowWrapper} from "enzyme";
import { findByTestAttr } from "../../Utils";
import ListItem, {ListItemProps} from './'

describe('ListItem Component', () => {
    describe('Component Renders', () => {
        let wrapper: ShallowWrapper;
        beforeEach(() => {
            const props: ListItemProps = {
                title: 'test title',
                desc: 'test desc'
            }
            wrapper = shallow(<ListItem {...props}/>)
        })
        it('Should renders without error', () => {
            const component  = findByTestAttr(wrapper, 'listItemComponent');
            expect(component.length).toBe(1);
        })
        it('Should renders a title', () => {
            const title  = findByTestAttr(wrapper, 'componentTitle');
            expect(title.length).toBe(1);
        })
        it('Should renders a description', () => {
            const desc  = findByTestAttr(wrapper, 'componentDescription');
            expect(desc.length).toBe(1);
        })

    })

    describe('Should Not render', () => {
        let wrapper: ShallowWrapper;
        beforeEach(() => {
            const props: ListItemProps = {
                desc: 'test desc'
            }
            wrapper = shallow(<ListItem {...props}/>)
        })

        it('Should not render anything', () => {
            const component = findByTestAttr(wrapper, 'listItemComponent');
            expect(component.length).toBe(0);
        })
    })
})