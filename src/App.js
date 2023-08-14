import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Footer } from './components/Footer'
import { UnderConstructionPage } from './components/TempPage'
import 'bootstrap/dist/css/bootstrap.min.css'
import { WorkReport } from "./components/WorkReport"

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<> <Banner />
            <Skills />
            <Projects /></>} />
          <Route path="/workreport" element={<WorkReport />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
