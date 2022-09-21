import './App.css';
import logo from './images/logo.png';
import { Boton } from './components/Boton.js';
import { Contador } from './components/Contador.js';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0); // Inicializamos el estado

  const manejarClick = () => {    // Función que se ejecuta al hacer click
    setNumClicks(numClicks + 1); // Incrementamos el contador
    console.log('Click!');      // Mostramos Click! en consola
  }

  const reiniciarContador = () => {      // Función que se ejecuta al hacer click
    setNumClicks(0);                    // Reiniciamos el contador
    console.log('Reiniciar contador'); // Mostramos Reiniciar contador en consola
  }

  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img
          className='logo'
          src={logo}
          alt='Logo' />
      </div>
      <div className='contenedor-principal'>
        <Contador numClicks={numClicks} />
        < Boton
          texto='Click'
          esBotonDeClick={true}
          manejarClick={manejarClick} />
        < Boton
          texto='Reiniciar'
          esBotonDeClick={false}
          manejarClick={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
