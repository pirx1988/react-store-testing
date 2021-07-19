import Post from "../apis/Post";
import {User} from "../apis/User";

export enum actionTypes {
    GET_POSTS = 'GET_POSTS',
    GET_USER = 'GET_USER',
    TEST_ACTION = 'TEST_ACTION'
}

interface ActionGetPosts {
    type: actionTypes.GET_POSTS
    payload: Post[]
}

interface ActionGetUser {
    type: actionTypes.GET_USER,
    payload: User
}
interface ActionTest {
    type: actionTypes.TEST_ACTION
}

type Action = ActionGetPosts | ActionGetUser | ActionTest;

export default Action;