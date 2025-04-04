import logo from './logo.svg';
import './App.css';
import react from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RoomLists from './pages/RoomLists';

function App() {
  return (
   <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path ='/rooms' element={RoomLists} />
    </Routes>
   </Router>
  );
}

export default App;
