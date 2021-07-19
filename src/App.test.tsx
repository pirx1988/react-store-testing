import App from './App'
import {shallow, ShallowWrapper} from "enzyme";
import {findByTestAttr, testStore} from './Utils'
import State from "./state";
import {Provider} from 'react-redux'
import expectedPosts from "./__mocks__/expectedPosts";

const setUp = (initialState: State = {posts: []}): ShallowWrapper => {
    const store  = testStore(initialState);
    return shallow(<Provider store={store}><App/></Provider>);
};

describe('App Component', () => {
        let wrapper: ShallowWrapper;
        beforeEach(() => {
            const initialState: State = {
                posts: expectedPosts
            }
            wrapper = setUp(initialState);
        })

        it('Should render without errors', () => {

           const component = findByTestAttr(wrapper, 'appComponent');
           console.log(wrapper);
        })
})