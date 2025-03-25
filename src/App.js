// import logo from './logo.svg';
import React, {useState} from "react";
import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [mode , setMode]= useState("light"); // for sark mode

  const [alert, setAlert]= useState(null);

  const showAlert = (message , type)=>{
    setAlert({
      msg : message , 
      type: type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }

  const toggleMode= ()=>{
    // console.log(cls)
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor = "#0e3150"
      showAlert("Dark mode enabled" , "success");
      document.title="TextUtils-Dark mode"
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white"
      showAlert("light mode enabled" , "success");
      document.title="TextUtils-Light mode"
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text Below to Analyze " mode={mode} />} />
            <Route exact path="/TextUtils" element={<TextForm showAlert={showAlert} heading="Enter the text Below to Analyze " mode={mode} />} />
          </Routes>
        </div>
      </Router>
    
    </>
  );
}

export default App;
