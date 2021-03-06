import React from "react";
import SinglePage from "./SinglePage";
import { Link, Route, Routes } from "react-router-dom"
const About = (props) => {
   
    return (
        <div className="about__content">
            <ul className="about__list">
                <li>
                    <Link to="about-app">About App</Link>
                </li>
                <li>
                    <Link to="about-author">About Author</Link>
                </li>
            </ul>
            <Routes>
            <Route path=":slug" element={<SinglePage />}/>
            </Routes>

            
        </div>
    )
}
export default About