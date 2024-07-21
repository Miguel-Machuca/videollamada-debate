import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { agregarUsuario } from '../persistencia/UsuarioPersistencia';
import { useAuth } from '../context/AuthContext';

function RegistrarUsuarioPredominio(props) {
  const [usuario, setUsuario] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    grado_academico: "",
    fecha_nacimiento: "",
  });

  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUsuario((prevUsuario) => ({
      ...prevUsuario,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    try {
      await agregarUsuario(
        usuario.nombre,
        usuario.apellido,
        usuario.email,
        usuario.password,
        usuario.grado_academico,
        usuario.fecha_nacimiento,
        
      );
      await signup(usuario.email, usuario.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleLogin = () => {
    navigate('/');
  };

  return (
    <>
      {props.children({
        handleLogin,
        handleSubmit,
        handleChange,
        usuario,        
        error
      })}
    </>
  );
}

export default RegistrarUsuarioPredominio;
