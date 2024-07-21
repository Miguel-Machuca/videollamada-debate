import React from 'react';
import LoginPredominio from '../predominio/LoginPredominio';

function LoginPresentacion(props) {
  return (
    <LoginPredominio>
      {({
        handleSubmit,
        handleChange,
        handleRegister
      }) => (
        <div className="flex h-screen w-screen items-center justify-center bg-black">
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <h1 className="text-white text-3xl mb-8">Login</h1>
            <label htmlFor="email" className="text-gray-400 mb-2">Correo</label>
            <input
              className="bg-gray-300 text-black pl-2 py-2 mb-6 rounded-full w-80"
              type="email"
              id="email"
              name="email"
              placeholder=""
              onChange={handleChange}
            />
            <label htmlFor="password" className="text-gray-400 mb-2">Contraseña</label>
            <input
              className="bg-gray-300 text-black pl-2 py-2 mb-6 rounded-full w-80"
              type="password"
              id="password"
              name="password"
              placeholder=""
              onChange={handleChange}
            />
            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-8 rounded-full mt-4"
            >
              Iniciar
            </button>
            <p onClick={handleRegister} className="text-gray-400 text-sm mt-4 underline cursor-pointer">
              ¿No tienes cuenta?
            </p>
          </form>
        </div>
      )}
    </LoginPredominio>
  );
}

export default LoginPresentacion;
