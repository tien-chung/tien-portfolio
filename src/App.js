import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Achievements from './pages/Achievements';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<Navigate to={'/Home'} />} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/Achievements" element={<Achievements/>} />
    </Routes>
    </div>
  );
}

export default App;
