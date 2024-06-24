import React from 'react';
import LogicaNegocio from '../predominio/PredominioPrueba';

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
        <div>
          <button
            id="btn"
            onClick={handleEmitClick}
            className={`
              bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500
            `}
          >
            {isEmitting ? 'Detener emisión' : 'Emitir'}
          </button>
          <button
            id="audio-btn"
            onClick={handleAudioClick}
            className={`
              bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
            `}
          >
            {isAudioEnabled ? 'Desactivar audio' : 'Activar audio'}
          </button>
          <video ref={videoRef} style={{ width: '800px', height: '600px', transform: 'scaleX(-1)' }} autoPlay></video>
          <canvas ref={canvasRef} style={{ display: 'none' }} width="512" height="384"></canvas>
          <div className="status">{status}</div>
        </div>
      )}
    </LogicaNegocio>
  );
}

export default Presentacion;
