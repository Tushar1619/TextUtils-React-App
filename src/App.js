import Navbar from './components/navbar'
import Textform from './components/textform';
import './App.css';
import { useState } from 'react';
import Alert from './components/alert'
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import About from './components/about'
function App() {
  const toggle = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "rgb(34 48 52)";
      setMsg(useText);
      setTimeout(alertFunc,
        1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      setMsg(useText);
      setTimeout(alertFunc,
        1500);

    }
  }
  const alertFunc = () => {
    setMsg(null);
  }
  const [mode, setMode] = useState('light');
  const [msg, setMsg] = useState(null);
  const useText = {
    status: "Success",
    message: `Switched to ${mode} mode!`
  }
  return (
    <div>
      <Router>
        <Navbar title={"TextUtils"} mode={mode} toggle={toggle} />
        <Alert obj={useText} msg={msg} mode={mode} />
        <div className="container">
        <Routes>
          <Route exact path="/" element={<Textform heading={"Type the text to analyze"} mode={mode} />}/>
          <Route exact path="/home" element={ <About mode={mode} />}/>
      </Routes>
      </div>
    </Router>
    </div >
  );

}

export default App;
