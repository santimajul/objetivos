import React from "react";
import '../hojas-de-estilo/objetivos.css'
import { AiOutlineCloseCircle } from "react-icons/ai";

function Objetivo({ texto, id, completado, eliminarObjetivo, completarObjetivo }) {

    return (
        <div className={completado ? 'objetivo-container completado' : 'objetivo-container'} >
            <div className="texto-container" 
            onClick={()=> completarObjetivo(id)}>
                {texto}
            </div>
            <div className='objetivo-icono' onClick={() => eliminarObjetivo(id)}>
                 <AiOutlineCloseCircle  />
            </div>
        </div>
    );
};

export default Objetivo;