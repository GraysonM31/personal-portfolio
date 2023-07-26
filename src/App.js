import logo from './logo.svg';
import './App.css';
import {NavBar} from './components/NavBar';
import {Banner} from './components/Banner'
import {Skills} from './components/Skills'
import {Projects} from './components/Projects'
import {Footer} from './components/Footer'
import {UnderConstructionPage} from './components/TempPage'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">

      {/* <UnderConstructionPage/> */}
      
      <NavBar/>
      <Banner/>
      <Skills/>
      <Projects/>
      <Footer/>

      

    </div>
  );
}

export default App;
