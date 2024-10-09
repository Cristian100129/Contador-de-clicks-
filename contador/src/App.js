import './App.css';
import logo192 from './imagenes/logo192.png'; 
import Boton from './componentes/Boton'
import Contador from './componentes/Contador';
import { useState } from 'react';

function App() {
  // aqui vamos usar hooks

  const [numClics, setNumClics] = useState(0);  

  const manejarClic = () =>{
    setNumClics(numClics + 1);
  }
  const reiniciarContador = () =>{
    setNumClics(0); 
  }
  return (
    <div className="App">
      <div className="contenedor">
       <h1 className='titulo'>Contador de clicks</h1>
        <img className = 'logo'
       src={logo192}
       alt='Logo imagen'
       /> 
      </div>
      <div className='contenedor-principal'>
      <Contador numClics={numClics} />
      <Boton
        texto = 'clic'
        esBotonDeClic={true}
        manejarClic={manejarClic}
      />
      <Boton 
        texto='reiniciar'
        esBotonDeClic={false}
        manejarClic={reiniciarContador} 
      />
      </div>
    </div>
  );
}
export default App;
