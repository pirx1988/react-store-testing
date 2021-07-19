import {ShallowWrapper} from "enzyme";
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './../reducers';
import { middlewares } from './../createStore'
import State from "../state";

export const findByTestAttr = (component: ShallowWrapper, attr: string) => {
    return component.find(`[data-test='${attr}']`);
}

export const testStore = (initialState: State={posts: []}) => {
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
    return createStoreWithMiddleware(rootReducer, initialState);
}