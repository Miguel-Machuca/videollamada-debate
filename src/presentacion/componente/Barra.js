import React from 'react'
import { Link } from 'react-router-dom';



function Barra(props) {
  return (
              
        <div className="bg-gray-500 h-12 text-white flex justify-between items-center px-36">
            <Link to={`/panel`}>
                <h2 className="text-xl">Panel</h2>
            </Link>
            
            <h2 className="text-xl">Perfil</h2>
        </div>
  )
}

export default Barra;