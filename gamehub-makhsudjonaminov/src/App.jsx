
import {useState} from 'react';

import WelcomeView from './components/WelcomeView';
import GameView from './components/GameView';
import "./App.css"
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import RPS from './pages/RPS';
import TicTac from './pages/TicTac';
function App() {
 

  return (
    <div className="container">
      <div className="card">
           <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/rps' element={<RPS/>}/>
              <Route path='/tictac' element={<TicTac/>}/>
              <Route path="/rps/play" element={<GameView />} />
           </Routes>
      </div>
    </div>
  );
}
export default App