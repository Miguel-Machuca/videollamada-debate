import React from 'react';
import LogicaNegocio from '../predominio/PredominioPrueba';
import { FiMic, FiMicOff, FiVideoOff, FiVideo } from "react-icons/fi";

const imagenNoEmision = 'https://th.bing.com/th/id/R.8a1ac7224afc75e9e59aa287d47ec3f1?rik=TMbtO2nTyZ4AIA&pid=ImgRaw&r=0';

const anchoImagen = '730px'; // Definir variables para el ancho y alto
const altoImagen = '550px';

const Presentacion = () => {
  return (
    <LogicaNegocio>
      {({
        handleEmitClick,
        handleAudioClick,
        isEmitting,
        isAudioEnabled,
        status,
        isConnected,
        videoRef,
        canvasRef
      }) => (
        <div className="min-h-screen flex flex-col items-center justify-center bg-black">
          <div className="flex flex-col items-center">
            {!isEmitting ? (
              <img src={imagenNoEmision} alt="Imagen sin emisión" className="" style={{ width: anchoImagen, height: altoImagen }} /> // Utilizar variables
            ) : (
              <video ref={videoRef} style={{ width: anchoImagen, height: altoImagen, transform: 'scaleX(-1)' }} autoPlay className=""></video> // Utilizar variables
            )}
            <canvas ref={canvasRef} style={{ display: 'none' }} width={anchoImagen} height={altoImagen}></canvas>
          </div>
          <div className="bg-gray-500 py-2 px-4 rounded w-full max-w-screen-xl ">
            <div className="flex justify-between items-center mx-auto">

              {isAudioEnabled ? 
                <button 
                id="audio-btn" 
                onClick={handleAudioClick} 
                className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 mr-2`}>
                <FiMic />   
                </button> 
              :
                <button
                id="audio-btn" 
                onClick={handleAudioClick}
                className={`bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 mr-2`}>
                <FiMicOff /> 
                </button>
             }
              

            {isEmitting ? 
            <button 
            id="btn" 
            onClick={handleEmitClick}
            className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 mr-2`}>                              
            <FiVideo />
        </button>            

            : 
            <button 
                id="btn"
                onClick={handleEmitClick}
                className={`bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 mr-2`}>
                <FiVideoOff />    
            </button>
            }
             
              

              <button
                id="red-btn"
                className={`bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500`}
              >
                Terminar
              </button>
            </div>
          </div>
        </div>
      )}
    </LogicaNegocio>
  );
}

export default Presentacion;
