 import './App.css';
 import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import HeroPage from './Components/HeroPage/HeroPage';
 import NavBar from './Components/NavBar.jsx/NavBar';
 import About from './Components/About/About';

function App() {
  return (
    <div>
      <NavBar/>
      <Router>
        <Routes>
        <Route path="/" element={<HeroPage/>}/>
        <Route path="about" element={<About/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
