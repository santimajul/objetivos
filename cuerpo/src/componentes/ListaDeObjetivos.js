import React, { useState } from 'react';
import Formulario from './formulario';
import Objetivo from './objetivos';

function ListaDeObjetivos() {


    const [objetivos,setObjetivos] = useState([]);

    const agregarObjetivo = objetivo =>{
        
        if(objetivo.texto.trim()){
            objetivo.texto = objetivo.texto.trim();
            const objetivosActualizados = [objetivo, ...objetivos];
            setObjetivos(objetivosActualizados);
        }
    }

    const eliminarObjetivo = id =>{
        const objetivosActualizados = objetivos.filter(objetivo =>objetivo.id !== id);
        setObjetivos(objetivosActualizados);
    }

    const completarObjetivo = id => {
        const objetivosActualizados = objetivos.map(objetivo => {
          if (objetivo.id === id) {
            objetivo.completado = !objetivo.completado;
          }
          return objetivo;
        });
        setObjetivos(objetivosActualizados);
      }

    return(
        <>
        <Formulario onSubmit={agregarObjetivo} />
        <div className='lista'>
        {
          objetivos.map((objetivo) =>
            <Objetivo
              key={objetivo.id}
              id={objetivo.id} 
              texto={objetivo.texto}
              completado={objetivo.completado}
              completarObjetivo={completarObjetivo}
              eliminarObjetivo={eliminarObjetivo} />
          ) 
        }

        </div>  
        </>  
    );
};

export default ListaDeObjetivos;
