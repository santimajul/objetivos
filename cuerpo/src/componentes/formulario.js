import React, { useState } from "react";
import '../hojas-de-estilo/formulario.css'
import { v4 as uuidv4 } from 'uuid';

function Formulario(props) {

    const [input,setInput] = useState('');

    const manejarCambio = e =>{

        setInput(e.target.value);
    };

    const manejarTexto = e =>{
        e.preventDefault();

        const nuevoObjetivo = {
            id: uuidv4(),
            texto: input,
            completado: false,
        }

        props.onSubmit(nuevoObjetivo);
        document.querySelector('.form-container').reset();
    }

    return(
        <div >
            <form className="form-container"
            onSubmit={manejarTexto}>
                <input type="text" placeholder="Escriba aqui..." onChange={manejarCambio}></input>
                <button type='submit' className='boton'><strong>SEND</strong></button>
            </form>
        </div>
    );
};

export default Formulario;