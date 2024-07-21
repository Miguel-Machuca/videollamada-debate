import React from 'react';
import CrearDebatePredominio from '../predominio/CrearDebatePredominio';
import Barra from './componente/Barra';


function CrearDebatePresentacion(UsuarioPersistenciarops) {
  return (
    <CrearDebatePredominio>
      {({     
        debate,
        error,   
        navigate,
        handleSubmit,
        handleChange
      }) => (
        <div className='bg-black'>
        <Barra></Barra>
        <div className="min-h-screen  text-white px-4">
          
          <h1 className="text-xl mb-6">Crear Debate</h1>

          <div className="form bg-gray-800 p-6 rounded-lg">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="form-group mb-4">
                <label htmlFor="tema" className="block mb-2">Tema:</label>
                <input 
                type="text" 
                id="tema" 
                name="tema"               
                value={debate.tema}                
                placeholder="Tema"
                onChange={handleChange}
                className="input w-full p-2 rounded bg-gray-700 border border-gray-600 text-white" required />
              </div>

              <div className="form-group mb-4">
                <label htmlFor="fecha_emision" className="block mb-2">Fecha de Emisión:</label>
                <input 
                  type="date" 
                  id="fecha_emision" 
                  name="fecha_emision" 
                  value={debate.fecha_emision}                  
                  onChange={handleChange}
                  className="input w-full p-2 rounded bg-gray-700 border border-gray-600 text-white" required />
              </div>

              <div className="form-group mb-4">
                <label htmlFor="hora_emision" className="block mb-2">Hora de Emisión:</label>
                <input 
                  type="time" 
                  id="hora_emision" 
                  name="hora_emision" 
                  value={debate.hora_emision}
                  onChange={handleChange}
                  className="input w-full p-2 rounded bg-gray-700 border border-gray-600 text-white" required />
              </div>

              <div className="form-group mb-4">
                <label htmlFor="url_imagen" className="block mb-2">Imagen (opcional):</label>
                <input 
                  type="file" 
                  id="url_imagen" 
                  name="url_imagen" 
                  value={debate.url_imagen}
                  onChange={handleChange}
                  className="input w-full p-2 rounded bg-gray-700 border border-gray-600 text-white" />
              </div>

              <div className="form-group mb-4">
                <label htmlFor="cantidad_participante" className="block mb-2">Número de Participantes:</label>
                <input 
                  type="number" 
                  id="cantidad_participante" 
                  name="cantidad_participante" 
                  value={debate.cantidad_participante}
                  onChange={handleChange}
                  className="input w-full p-2 rounded bg-gray-700 border border-gray-600 text-white" required />
              </div>

              <div className="form-group mb-4">
                <label htmlFor="descripcion" className="block mb-2">Descripción (opcional):</label>
                <textarea 
                  id="descripcion" 
                  name="descripcion" 
                  value={debate.descripcion}
                  onChange={handleChange}
                  className="textarea w-full p-2 rounded bg-gray-700 border border-gray-600 text-white"></textarea>
              </div>

              <div className="form-group mb-4">
                <label htmlFor="visualizacion" className="block mb-2">Visualización:</label>
                <select 
                  id="visualizacion" 
                  name="visualizacion" 
                  onChange={handleChange}
                  className="input w-full p-2 rounded bg-gray-700 border border-gray-600 text-white" required>
                  <option value="publica">Pública</option>
                  <option value="privada">Privada</option>
                </select>
              </div>

              <div className="flex justify-between">
                <button type="submit" className="button bg-green-500 text-black px-4 py-2 rounded">Guardar</button>
                <button type="button" className="button bg-red-500 text-white px-4 py-2 rounded" onClick={() => navigate(-1)}>Cancelar</button>
              </div>
            </form>
          </div>
        </div>          
        </div>
      )}
    </CrearDebatePredominio>
  )
}

export default CrearDebatePresentacion;
