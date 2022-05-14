import logo from './logo.svg';
import './App.css';
import { buildQueries } from '@testing-library/react';
import Saludo from './components/Saludo';
import ConHijos from './components/ConHijos';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Card from './components/Card';
import Contador from './components/Contador';
import DogsContainer from './components/DogsContainer';
import RobotsContainer from './components/robots/RobotsContainer';
import PokeContainer from './components/pokemon/PokeContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RobotDetail from './components/robots/RobotDetail';
import { DarkModeContext } from './context/darkModeContext';
import { useState } from 'react';
import ToggleDarkMode from './components/ToggleDarkMode';
import FavRobotsProvider from './context/favRobotsContext';
import MilanesaNapolitana from './components/shop/MilanesaNapolitana';
import Milanesas from './components/shop/Milanesas';

function App() {

  const [darkMode, setDarkMode] = useState(false)
  
  const darkModeHandler = () => {
    setDarkMode( currentState => !currentState )
  }

  const stylesP = {
    border: 'solid 2px blue',
    padding: '20px'
  }

  const styles = {
    header: 'text-3xl font-light underline text-amber-600'
  }

  return (
    <DarkModeContext.Provider value={darkMode}>
      <FavRobotsProvider>
        <BrowserRouter>
          <NavBar></NavBar>
          <ToggleDarkMode darkModeHandler={darkModeHandler}/>
          <Routes>
            <Route path='/' element={<Saludo name='Juan' age='24'/>}/>
            <Route path='/pokemon' element={<PokeContainer/>}/>
            <Route path='/robots' element={<RobotsContainer/>}/>
            <Route path='/robots/:robotId' element={<RobotDetail/>}/>
            <Route path='/milanesa' element={<MilanesaNapolitana/>}/>
            <Route path='/milanesas' element={<Milanesas/>}/>
          </Routes>
        </BrowserRouter>
      </FavRobotsProvider>
    </DarkModeContext.Provider>
  );
}

export default App;
