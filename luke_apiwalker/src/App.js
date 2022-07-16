import logo from './logo.svg';
import './App.css';
import SwapiDisplayComponent from './views/SwapiDisplayComponent';
import {useState} from 'react';
import {Route, Routes, Link} from "react-router-dom"
import SWPersonDisplay from './views/SWPersonDisplay';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SwapiDisplayComponent/>} />
        <Route path="/:swthing/:swid" element={<SWPersonDisplay/>} />
      </Routes>


    </div>
  );
}

export default App;
