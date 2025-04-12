import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./navbar"
import "./style.css"
import Homepage from "./homepage";
import Items from "./items";
import Disease1 from "./disease1";


function App(){
    return(
        <>
    <Router>
        <Navbar />
            <Routes>
                <Route path="/" element={<Homepage />} />
                {/* <Route path="/features" element={<Disease1 />} /> */}
                <Route path="/disease" element={<Disease1/>} />
                <Route path="/items" element={<Items />} />
            </Routes>
    </Router>
        </>
    )
}

export default App;