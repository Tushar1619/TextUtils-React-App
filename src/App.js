import Navbar from './components/navbar'
import Textform from './components/textform';
import './App.css';
import {useState} from 'react';

function App(){
  const toggle = ()=>{
      if(mode==='light'){
          setMode('dark');
          document.body.style.backgroundColor="rgb(34 48 52)";
      }
      else{
        setMode('light');
        document.body.style.backgroundColor="white";
      }
  }
const [mode,setMode] = useState('light');
  return(
    <div>
      <Navbar title={"TextUtils"}  mode={mode} toggle={toggle}/>
      {/* <Navbar/> */}
      <div className="container">
      <Textform heading={"Type the text to analyze"} mode={mode}/>
      
      </div>
    </div>
  );

}

export default App;
