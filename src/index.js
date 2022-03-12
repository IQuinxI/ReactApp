import React from "react";

import reactDom from "react-dom";
import { BrowserRouter as Router } from "react-router-dom"

import TodoContainer from "./functionBased/Components/TodoContainer"
import "./functionBased/App.css"
reactDom.render(
    <React.StrictMode>
        <Router>
            <TodoContainer />
        </Router>
        
    </React.StrictMode>
    , document.getElementById("root"))