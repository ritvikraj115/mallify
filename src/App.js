
import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Carousel from './Components/Carousel';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import Electronics from './Components/Electronics';
import Medicines from './Components/Medicines';
import News from './Components/News';
import Spinner from './Components/Spinner';

function App(props) {
  const [progress, setProgress] = useState(0);
  var loading=true;
 return (
    <>
        <Router>
        <Navbar  setProgress={setProgress}/> 
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress} 
      />
      <Routes>
      <Route path="/" element={<Carousel loading={loading}/>}></Route>
      <Route  path="/about" element={<About loading={loading} title={"About"}/>} ></Route>
      <Route path="/electronics" element={<Electronics title={"Electronics"}/>}></Route>
      <Route path="/medicines" element={<Medicines title={"Medicines"}/>}></Route>
      <Route path="/clothes" element={<News title={"Clothes"} category={"accessories"} setProgress={setProgress} progress={progress}/>}></Route>
    </Routes>
    </Router>
    </>
  );
}

export default App;
