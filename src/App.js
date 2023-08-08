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

var underConstruction = false;

function App() {
  return (
    // Use conditional rendering with ternary operator or if-else statement
    underConstruction ? (
      <div className="ConstructionPage">
        <UnderConstructionPage />
      </div>
    ) : (
      <div className="App">
        <Routes>
          <Route path='/' element={<> <NavBar/> <Banner />
          <Skills />
          <Projects /></>} />
          <Route path="/workreport" element={<WorkReport />} />
        </Routes>
        <Footer />
      </div>
    )
  );
}

export default App;
