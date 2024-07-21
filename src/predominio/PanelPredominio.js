import React, {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import { listarDebate } from '../persistencia/DebatePersistencia';


function PanelPredominio(props) {
  const navigate = useNavigate();

  const handleCreate = () => {
    navigate("/crearDebate");
  }

  const [debates, setDebates] = useState([]);

  useEffect(() => {
    const unsubscribe = listarDebate(setDebates);
    return () => unsubscribe();
  }, [])

  
  return (
    <>
      {props.children({
        handleCreate,
        debates
      })}
    </>
  );
}

export default PanelPredominio;