import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { crearDebate } from '../persistencia/DebatePersistencia'; 


function CrearDebatePredominio(props) {

  const [debate, setDebate] = useState({
    tema: "",
    cantidad_participante: "",
    fecha_emision: "",
    hora_emision: "",
    estado: "",
    url_imagen: "",
    descripcion: ""
  });

  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    try {
      await crearDebate(
        debate.tema,
        debate.cantidad_participante,
        debate.fecha_emision,
        debate.hora_emision,
        "Proximamente",
        debate.url_imagen,
        debate.descripcion,
        "",
        ""        
      );
      navigate("/panel");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDebate((prevDebate) => ({
      ...prevDebate,
      [name]: value,
    }));
  };
  
  return (
    <>
      {props.children({        
        error,
        debate,
        navigate,
        handleSubmit,
        handleChange
      })}
    </>
  );
}

export default CrearDebatePredominio;