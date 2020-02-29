
import React, { useState } from "react";
import Menu from "./components/Menu"
import Home from "./components/Home"
import Movie from "./components/Movie/Movie"
import Book from "./components/Book"
import Code from "./components/Code"
import Music from "./components/Music"

import {
    HashRouter,
    Route
} from "react-router-dom";

function App() {
    return (

        <HashRouter>
            <div>
                <Route path="/" exact component={Home} />
                <Route path="/movie" component={Movie} />
                <Route path="/music" component={Music} />
                <Route path="/code" component={Code} />
                <Route path="/book" component={Book} />
            </div>
        </HashRouter>
    );
}

export default App;