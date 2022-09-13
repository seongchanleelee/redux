import React from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "../routes/Home.js"
import Detail from "../routes/Detail.js"
function App() {
    return (
    <Router>
        <Routes>
            <Route path="/" exact element={<Home></Home>}></Route>
            <Route path="/:id" element={<Detail></Detail>}></Route>
        </Routes>
    </Router>
    )
}

export default App;