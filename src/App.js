import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import { NavBar } from './components/NavBar';
import { NavBarAlt } from './components/NavBarAlt';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { WorkReport } from "./components/WorkReport";
import { WorkReportF23 } from "./components/WorkReportF23";
import { WorkReportS24 } from "./components/WorkReportS24";
import { WorkReportW25 } from "./components/WorkReportW25";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<><NavBar /><Banner /><Skills /><Projects /></>} />
          <Route
            path="/workreport"
            element={
              <>
                <NavBarAlt />
                <section id="workterm">
                  <WorkReport />
                </section>
                <section id="worktermf23">
                  <WorkReportF23 />
                </section>
                <section id="worktermS24">
                  <WorkReportS24 />
                </section>
                <section id="worktermW25">
                  <WorkReportW25 />
                </section>
              </>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;