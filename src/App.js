import React from "react";
import {HashRouter, Route, Routes} from "react-router-dom";
import Home from "./components/home/Home";
import Projects from "./components/Projects/Projects";
import Project from "./components/Projects/Project";

const App = () => {
    const titleRef = React.useRef();

    return (
        <HashRouter basename={process.env.PUBLIC_URL + "/"}>
            <Routes>
                <Route path="/" exact element={<Home ref={titleRef}/>}/>
                <Route path="/projects" exact element={<Projects ref={titleRef}/>}/>
                <Route path="/project/:id" exact element={<Project ref={titleRef}/>}/>
            </Routes>
        </HashRouter>
    );
};

export default App;
