import App from './App'
import {mount, ReactWrapper, shallow, ShallowWrapper} from "enzyme";
import {findByTestAttr, testStore} from './Utils'
import State from "./state";
import {Provider} from 'react-redux'
import expectedPosts from "./__mocks__/expectedPosts";

const setUp = (initialState: State = {posts: []}): ReactWrapper => {
    const store  = testStore(initialState);
    return mount(
        <Provider store={store}>
            <App/>
        </Provider>, {context: {store}}).childAt(0);
};

describe('App Component', () => {
        let wrapper: ReactWrapper;
        beforeEach(() => {
            const initialState: State = {
                posts: expectedPosts
            }
            wrapper = setUp(initialState);
        })

        it('Should render without errors', () => {
           const component = findByTestAttr(wrapper, 'appComponent');
            expect(component.length).toBe(1)
        })
        it('Should update state after calling method toggleButtonVisibility', () =>{
            const componentInstance = wrapper.instance().context;
            componentInstance
        })
})