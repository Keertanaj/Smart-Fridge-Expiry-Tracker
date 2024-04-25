import React from 'react';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Backup from './components/pages/Backup';
import Rest from './components/pages/Rest';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>}></Route>
          <Route path='/sign-up' exact element={<SignUp/>}></Route>
          <Route path='/backup' exact element={<Backup/>}></Route>
          <Route path='/rest' exact element={<Rest/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
