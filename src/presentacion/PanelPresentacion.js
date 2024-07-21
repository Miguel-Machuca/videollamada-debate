import React from 'react';
import PanelPredominio from '../predominio/PanelPredominio';
import Barra from './componente/Barra';


function PanelPresentacion(props) {
  return (
    <PanelPredominio>
      {({
        handleCreate,
        debates
      }) => (
        <div className='bg-black'>
        <Barra></Barra>   
        <div className="min-h-screen text-white px-4">
                 

          <div className="flex justify-between items-center my-4">
          <button onClick={handleCreate} className="bg-green-500 text-black px-4 py-2 rounded">Crear debate</button>          
            <h2 className="text-lg">Buscar</h2>
            <h2 className="text-lg">Filtro</h2>
          </div>
          <div className="grid grid-cols-3 gap-4">

            {debates.map(event => {
              return (
                <Link to={``} state={{tema: event.tema, fecha_emision: event.fecha_emision}} key={event.id}>
                    <div className={'border border-secondary shadow-md shadow-secondary rounded-3xl h-52 w-52 '}  >                        
                    <div className="bg-gray-600 p-2 rounded-b-lg text-sm">
                      <p>Tema: {event.tema}</p>
                      <p>Moderador: Javier Olivera</p>
                      <p>Participantes: Indefinido</p>
                      <p>Fecha de Emisión: {event.fecha_emision}</p>
                      <p>Hora de Emisión: 18:00</p>
                      <p>Estado: Transmitiendo</p>
                    </div>
                    </div>
                </Link>
              )
            })}

          </div>
        </div>
        </div>
      )}
    </PanelPredominio>
  )
};

export default PanelPresentacion;
