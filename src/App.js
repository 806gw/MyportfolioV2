import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import PortFolio from './Portfolio';

function App() {
  return (
    <Routes>
      <Route path='/' element={<PortFolio/>} />
    </Routes>
  )
}

export default App;
