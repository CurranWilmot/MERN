import './App.css';
import {Routes, Route, Link} from 'react-router-dom'
import TestPage from './views/TestPage';
import CreateProductPage from './views/CreateProductPage';
import DisplayProducts from './views/DisplayProducts';
import DisplayOneProduct from './views/DisplayOneProduct';
import DisplayOneAndEdit from './views/DisplayOneAndEdit';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<DisplayProducts/>} />
        <Route path="/:prodId" element={<DisplayOneProduct/>} />
        <Route path="/:prodId/edit" element={<DisplayOneAndEdit/>} />
        <Route path="/test" element={<TestPage/>} />
      </Routes>
    </div>
  );
}

export default App;
