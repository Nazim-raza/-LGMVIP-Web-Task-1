import './App.css';
import { useState } from 'react';
import Todolist from './Components/Todolist';
import Navbar from './Components/Navbar';
import Alert from './Components/Alert';

function App() {
  const[mode, setMode] = useState("light");
  const[alert, setAlert] = useState(null);
  
  const showAlert = (message, type)=>{
    setAlert({
       msg:message,
       type:type
    });
     setTimeout(()=>{
       setAlert(null);
     },1500);
  }

  const toggleMode=()=>{
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor ="rgb(34 24 51)";
      showAlert("Dark Mode has enabled","success");
      
    }
    else{
      setMode("light");
      document.body.style.backgroundColor ="white";
      showAlert("Light Mode has enabled","success"); 
    }
  } 
  return (
    <div className='mdiv'>
    <Navbar title="Todolist" mode={mode} toggleMode={toggleMode} about="About" />
    <Alert alert={alert} />
      <div className="App">
        <Todolist />

      </div>
    </div>
  );
}

export default App;
