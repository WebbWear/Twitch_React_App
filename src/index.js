import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Games from './components/Games';
import Header from './components/Header';
import Stream from './components/Streams';
import ReactDOM from "react-dom";

import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

function App() {
    return (
        <Router>
        <Header />
        <Route exact path='/' component={Games} />
        <Route exact path='/top-streams' component={Stream} />

        </Router>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);