import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react'
import Alert from "./components/Alert";
/* import About from "./components/About";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"; */

function App() {
 const [mode, setMode] = useState('light')


 const [alert,setAlert]=useState(null);
 const showAlert=(message,type)=>{
   setAlert({
      msg :message,
      type :type
   })
   setTimeout(()=>{
    setAlert(null);
   },3000);
 }

 
  const changeMode=()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='grey';
      showAlert("Dark mode is Enable","danger")
      document.title="TextUtil Dark-Mode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("lights mode is Enable","success")
      document.title="TextUtil Light-Mode";
    }
  }
  return (
    <>
     {/*  <Router> */}

      <Navbar title="TextUtils" mode={mode} toggleMode={changeMode}/>
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Switch>
          <Route exact path="/About">
            <About />
          </Route>
          <Route exact path="/">
            
          </Route>
        </Switch> */}
            <TextForm heading="Enter Text to analyze below" mode={mode} showAlert={showAlert}/>
        
      </div>
    { /* </Router>*/}
    </>
  );
}

export default App;
