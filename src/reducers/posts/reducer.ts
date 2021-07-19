import Action, { actionTypes } from '../../actions/types'
import Post from "../../apis/Post";
export default (state: Post[] = [], action: Action) => {
    console.log(action)
    switch(action.type) {
        case actionTypes.GET_POSTS:
            return action.payload
        default: return state;

    }
}