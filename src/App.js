import Navbar from './components/navbar'
import Textform from './components/textform';
import './App.css';

function App(){

  return(
    <div>
      <Navbar title={"TextUtils"}/>
      {/* <Navbar/> */}
      <div className="container">
      <Textform heading={"Type the text to analyze"}/>
      
      </div>
    </div>
  );
}

export default App;
