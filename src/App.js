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

function App() {
  
  //lógica
  const miFuncion = () => {}

  const stylesP = {
    border: 'solid 2px blue',
    padding: '20px'
  }

  const styles = {
    header: 'text-3xl font-light underline text-amber-600'
  }

  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Saludo name='Juan' age='24'/>}/>
        <Route path='/pokemon' element={<PokeContainer/>}/>
        <Route path='/robots' element={<RobotsContainer/>}/>
        <Route path='/robots/:robotId' element={<RobotDetail/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
