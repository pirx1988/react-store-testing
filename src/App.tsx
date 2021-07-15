import React from "react";
import Header from "./components/header";
import './app.scss';
import Headline from './components/headline'

const App = () => {
    return (
        <div className="App">
            <Header/>
            <section className="main">
                <Headline desc="Click the button to render posts"/>
            </section>
        </div>
    );
}
export default App;