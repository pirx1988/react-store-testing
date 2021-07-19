import {fetchPosts} from '../actions'
import axios, {AxiosResponse} from "axios";
import  configureStore from 'redux-mock-store'
jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>;
import expectedPosts from "../__mocks__/expectedPosts";
import State from "../state";
import reduxThunk, { ThunkDispatch } from "redux-thunk";
import Action from "../actions/types";
import {testStore} from "../Utils";



type DispatchExts = ThunkDispatch<State, void, Action>
const middlewares = [reduxThunk];
const mockStore = configureStore<State, DispatchExts>(middlewares);

describe('fetchPosts action', () => {

    it('Store is updated correctly', async () => {

        const mockedResponse: AxiosResponse = {
            data: expectedPosts,
            status: 200,
            statusText: 'OK',
            headers: {},
            config: {}
        }
        mockedAxios.get.mockResolvedValueOnce(mockedResponse);
       const store = testStore({posts: []});
        await store.dispatch(fetchPosts() as any);
        const newState = store.getState();
        expect(newState.posts).toEqual(mockedResponse.data);
        expect(newState.posts).not.toBe(mockedResponse.data);
    });
});