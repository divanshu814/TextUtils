// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './Components/About';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const changeAlert=(message,type)=>{

    setAlert({
      msg:message,
      type:type
    })

   setTimeout(()=>{
    setAlert(null);
  },1000)
  }



  const changeMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      changeAlert('Dark mode activated','success');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      changeAlert('Light mode activated', 'success');
    }
  }

  return (
    <>
    <Router>

   <Navbar title="TextUtils" mode={mode} changeMode={changeMode} />
   <Alert alert={alert}/>
   <div className="container my-5">

    <Routes>
    <Route exact path="/about" element={<About/>}/>

    {/* <About/> */}
   

    <Route exact path="/" element={<TextForm heading="Enter the text to perform the operations" mode={mode} changeAlert={changeAlert}/>}/>
  
    </Routes>

   </div>
    </Router>
    </>
  );
}

export default App;
