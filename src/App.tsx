import React from "react";
import Header from "./components/header";
import {connect} from "react-redux";


import './app.scss';
import SharedButton from "./components/button";
import ListItem from "./components/listItem";
import {fetchPosts} from "./actions";
import State from './state'

import Headline from './components/headline'
import Post from "./apis/Post";

const tempArr = [
    {
        fName: 'Krzysztof',
        lName: 'Michalski',
        email: 'krzysztof.michalski@intive.com',
        age: 33,
        onlineStatus: true
    }
]

interface AppConnectedProps {
    fetchPosts: () => void,
    posts: Post[]
}

const App = (props: AppConnectedProps) => {


    const configButton = {
        buttonText: "Get posts",
        emitEvent: props.fetchPosts
    }
    const {posts} = props;

    return (
        <div className="App" data-test="appComponent">
            <Header/>
            <section className="main">
                <Headline header="Test header" desc="Click the button to render posts"/>
                <SharedButton {...configButton}/>
                {posts.length > 0 &&
                <div>
                    {posts.map((post: Post) => {
                        return <ListItem key={post.id} desc={post.body} title={post.title}/>
                    })}
                </div>

                }
            </section>
        </div>
    );
}

const mapStateToProps = (state: State) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps, {fetchPosts})(App);