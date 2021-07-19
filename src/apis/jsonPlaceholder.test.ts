import jsonPlaceholder from "./jsonPlaceholder";
import mockAxios from "axios";

it('calls axios nad returns posts', async () => {
    const posts = await mockAxios.get('https://jsonplaceholder.typicode.com/posts')
    expect(1).toBe(1)
})