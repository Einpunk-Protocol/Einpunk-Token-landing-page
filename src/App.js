 import './App.css';
 import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import HeroPage from './Components/HeroPage/HeroPage';
 import NavBar from './Components/NavBar.jsx/NavBar';
 import About from './Components/About/About';

function App() {
  return (
    <div>
      <Router>
      <NavBar/>
        <Routes>
        <Route exact path="/" element={<HeroPage/>}/>
        <Route exact path="/about" element={<About/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
