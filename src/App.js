import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom';
import Home from './components/Home';
import Menu from './components/Menu';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <NavLink activeClassName="active" exact to="/">Home</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/menu">Menu</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/menu" element={<Menu/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
