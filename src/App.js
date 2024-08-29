import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Achievements from './pages/Achievements';
import Education from './pages/Education';
import Work from './pages/Work';
import Project from './pages/Project';

function App() {
  return (
    <Routes>
      <Route path="/*" element={<Navigate to={'/Home'} />} />
      <Route path="/Home" element={<Home/>} />
      <Route path="/Achievements" element={<Achievements/>} />
      <Route path="/Education" element={<Education/>} />
      <Route path="/Work" element={<Work/>} />
      <Route path="/Project" element={<Project/>} />
    </Routes>
  );
}

export default App;
