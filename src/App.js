 import './App.css';
 import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
 import HeroPage from './Components/HeroPage/HeroPage';
 import NavBar from './Components/NavBar.jsx/NavBar';
 import About from './Components/About/About';
import HowToBuy from './Components/HowToBuy/HowToBuy';


function App() {
  return (
    <div>
      <Router>
      <NavBar/>
        <Routes>
        <Route exact path="/" element={<HeroPage/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/howtobuy" element={<HowToBuy/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
