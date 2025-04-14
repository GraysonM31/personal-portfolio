import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import { NavBar } from './components/NavBar';
import { NavBarAlt } from './components/NavBarAlt';

import { Banner } from './components/Banner'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Footer } from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import { WorkReport } from "./components/WorkReport"
import { WorkReportF23 } from "./components/WorkReportF23";
import { WorkReportS24 } from "./components/WorkReportS24";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<>  <NavBar /> <Banner />a
            <Skills />
            <Projects /> </>} />
          <Route path="/workreport" element={ <> <NavBarAlt/> <WorkReport />   <WorkReportF23/> <WorkReportS24/>  </>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
