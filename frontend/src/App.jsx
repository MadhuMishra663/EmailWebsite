import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Onebox from './components/Onebox';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/onebox" element={<Onebox />} />
      </Routes>
    </Router>
  );
}

export default App;
