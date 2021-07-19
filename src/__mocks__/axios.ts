import {Provider} from "react-redux";
import expectedPosts from "./expectedPosts";

export default {
    get: jest.fn(() => {
        return Promise.resolve({
            data: expectedPosts
        })
    })
}
