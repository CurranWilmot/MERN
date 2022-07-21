import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import TestPage from './views/TestPage';
import DisplayAuthors from './views/DisplayAuthors';
import DisplayAddAuthor from './views/DisplayAddAuthor';
import DisplayEditAuthor from './views/DisplayEditAuthor';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<DisplayAuthors/>} />
        <Route path="/new" element={<DisplayAddAuthor/>} />
        <Route path="/edit/:authid" element={<DisplayEditAuthor/>} />
        <Route path="/test" element={<TestPage/>} />
      </Routes>
    </div>
  );
}

export default App;
