import { actionTypes } from '../../actions/types'
import postReducer from './reducer'
import Post from '../../apis/Post'

describe('Posts Reducer', () => {

    it('Should return default state ', () => {
        const newState = postReducer(undefined, {type: actionTypes.TEST_ACTION});
        expect(newState).toEqual([]);
    });

    it('Should return new state if receiving type', () => {
        const posts: Post[] = [{
            userId: 12341,
            id: 123121,
            title: "test post title1",
            body: "test post body1"
        },
            {
                userId: 12342,
                id: 123122,
                title: "test post title2",
                body: "test post body2"
            },
            {
                userId: 12343,
                id: 123123,
                title: "test post title3",
                body: "test post body3"
            }

        ]
        const newState = postReducer(posts, {
            type: actionTypes.GET_POSTS,
            payload: posts
        });

        expect(newState).toEqual(posts);
        expect(newState).not.toBe(posts);
    })
})