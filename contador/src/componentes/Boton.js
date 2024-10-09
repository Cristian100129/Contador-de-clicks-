import React from 'react'; 
import '../estilos/Boton.css'

function Boton({texto, esBotonDeClic, manejarClic}){
    return(
        <button
        className={esBotonDeClic ? 'Boton-clic' : 'Boton-reiniciar' }
        onClick={manejarClic}>
           {texto}
        </button>
    )
}
export default Boton; 