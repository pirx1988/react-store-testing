import {ShallowWrapper} from "enzyme";

export const findByTestAttr = (component: ShallowWrapper, attr: string) => {
    return component.find(`[data-test='${attr}']`);
}