import React from "react";
import Header from "./components/header";
import './app.scss';

import Headline from './components/headline'

const tempArr = [
    {
        fName: 'Krzysztof',
        lName: 'Michalski',
        email: 'krzysztof.michalski@intive.com',
        age: 33,
        onlineStatus: true
    }
]

const App = () => {
    return (
        <div className="App">
            <Header/>
            <section className="main">
                <Headline header="Test header" desc="Click the button to render posts" />
            </section>
        </div>
    );
}
export default App;