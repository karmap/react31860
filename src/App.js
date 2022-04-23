import logo from './logo.svg';
import './App.css';
import { buildQueries } from '@testing-library/react';
import Saludo from './components/Saludo';
import ConHijos from './components/ConHijos';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Card from './components/Card';
import Contador from './components/Contador';

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
    <>
      <NavBar></NavBar>
      <ItemListContainer greeting='Saludo'></ItemListContainer>
      {/* <ConHijos>
        <Saludo name='Mario' age='25'></Saludo>
      </ConHijos>
      <h1 style={{color:'red', textDecoration:'underline'}}>Hola Mundo con React!</h1>
      <strong>otro mensaje</strong>
      <li>{ 2+4 }</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <p style={stylesP}>Este es un ejemplo de párrafo</p>
      <h1 className={styles.header}>
        Hello world!
      </h1>

      <button class="btn gap-2">
        Haz click aquí
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
      </button> */}
      <Saludo name='Juan' age='32' action={miFuncion}/>
      <Saludo name='Ana' age='27'/>
      <Card title='Mi título' otroComponente={Saludo}></Card>

      <Contador></Contador>
    </>
  );
}

export default App;
