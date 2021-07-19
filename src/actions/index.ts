import {ThunkAction as ReduxThunkAction, ThunkDispatch} from "redux-thunk";
import {types} from "util";
import axios, {AxiosResponse} from "axios";
import Post from "../apis/Post";
import jsonPlaceholder from "../apis/jsonPlaceholder";
import Action, {actionTypes} from '../actions/types'
import State from "../state";
type ThunkAction = ReduxThunkAction<void, State, unknown, Action>

export const fetchPosts = (): ThunkAction => {
    return async (dispatch: ThunkDispatch<State, unknown, Action>) => {
        try {
            const response: AxiosResponse<Post[]> = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts?_limit=10')
            dispatch({type: actionTypes.GET_POSTS, payload: [...response.data]});
        }
        catch (e) {
        } finally {
        }

    }
};