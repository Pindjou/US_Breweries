import './css/index.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Brewery from './pages/Brewery';
import About from './pages/About';

import Contact from './pages/Contact';

import Impressum from './pages/Impressum';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/brewery" element={<Brewery/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/impressum" element={<Impressum/>} />
    
      </Routes>
    </div>
  );
}

export default App;
