import React from 'react';
import RegistrarUsuarioPredominio from '../predominio/RegistrarUsuarioPredominio';

function RegistrarUsuarioPresentacion(props) {
  return (
    <RegistrarUsuarioPredominio>
      {({
        handleLogin,
        handleSubmit,
        handleChange,
        usuario,
        error
      }) => (
        <div className="flex justify-center items-center min-h-screen bg-gray-900">
          <div className="w-full max-w-lg bg-black p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-center text-white mb-8">Registrarse</h2>

            {error && (
              <div className="bg-red-500 text-white p-3 rounded mb-4">
                {error}
              </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-400 mb-1">Nombre</label>
                  <input
                    className="w-full px-4 py-2 bg-gray-700 text-gray-300 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    type="text"
                    value={usuario.nombre}
                    name="nombre"
                    placeholder="Nombre"
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block text-gray-400 mb-1">Apellido</label>
                  <input
                    className="w-full px-4 py-2 bg-gray-700 text-gray-300 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    type="text"
                    value={usuario.apellido}
                    name="apellido"
                    placeholder="Apellido"
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block text-gray-400 mb-1">Grado Académico (opcional)</label>
                  <input
                    className="w-full px-4 py-2 bg-gray-700 text-gray-300 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    type="text"
                    value={usuario.grado_academico}
                    name="grado_academico"
                    placeholder="Grado Académico"
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block text-gray-400 mb-1">Fecha de Nacimiento</label>
                  <input
                    className="w-full px-4 py-2 bg-gray-700 text-gray-300 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    type="date"
                    value={usuario.fecha_nacimiento}
                    name="fecha_nacimiento"
                    placeholder="Fecha de Nacimiento"
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block text-gray-400 mb-1">Correo Electrónico</label>
                  <input
                    className="w-full px-4 py-2 bg-gray-700 text-gray-300 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    type="email"
                    value={usuario.email}
                    name="email"
                    placeholder="Correo Electrónico"
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block text-gray-400 mb-1">Contraseña</label>
                  <input
                    className="w-full px-4 py-2 bg-gray-700 text-gray-300 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    type="password"
                    value={usuario.password}
                    name="password"
                    placeholder="Contraseña"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
              >
                Registrar
              </button>
            </form>

            <div className="text-center mt-4">
              <button
                onClick={handleLogin}
                className="text-blue-500 hover:underline"
              >
                ¿Ya tienes cuenta?
              </button>
            </div>
          </div>
        </div>
      )}
    </RegistrarUsuarioPredominio>
  );
}

export default RegistrarUsuarioPresentacion;
