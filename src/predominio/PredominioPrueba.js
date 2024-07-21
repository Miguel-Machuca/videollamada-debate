import React, { useState, useEffect, useRef } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:3000');

function LogicaNegocio(props) {
  const [isConnected, setIsConnected] = useState(false);
  const [isEmitting, setIsEmitting] = useState(false);
  const [status, setStatus] = useState('');
  const [isAudioEnabled, setIsAudioEnabled] = useState(false);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const emitIntervalRef = useRef(null);
  const streamRef = useRef(null);

  useEffect(() => {
    socket.on('connect', () => setIsConnected(true));
    socket.on('disconnect', () => setIsConnected(false));

    return () => {
      socket.off('connect');
      socket.off('disconnect');
      if (emitIntervalRef.current) {
        clearInterval(emitIntervalRef.current);
      }
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const publicarMensaje = (msg) => {
    setStatus(msg);
  };

  const loadCamara = (stream) => {
    streamRef.current = stream;
    if (videoRef.current) {
      videoRef.current.srcObject = stream;
      publicarMensaje('Cámara funcionando');
    }
  };

  const errorCamara = () => {
    publicarMensaje('La cámara ha fallado');
  };

  const verVideo = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const video = videoRef.current;

    if (context && video) {
      context.save();
      context.scale(-1, 1);
      context.drawImage(video, -canvas.width, 0, canvas.width, canvas.height);
      context.restore();

      socket.emit('stream', canvas.toDataURL('image/webp'));
    }
  };

  const handleEmitClick = () => {
    if (isEmitting) {
      clearInterval(emitIntervalRef.current);
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
        streamRef.current = null;
      }
      setIsEmitting(false);
      publicarMensaje('Emisión detenida');
    } else {
      navigator.mediaDevices.getUserMedia({ video: true, audio: isAudioEnabled })
        .then(loadCamara)
        .catch(errorCamara);

      emitIntervalRef.current = setInterval(verVideo, 300);
      setIsEmitting(true);
      publicarMensaje('Emitiendo...');
    }
  };

  const handleAudioClick = () => {
    setIsAudioEnabled(prev => !prev);
  };

  const imagenNoEmision = 'https://th.bing.com/th/id/R.8a1ac7224afc75e9e59aa287d47ec3f1?rik=TMbtO2nTyZ4AIA&pid=ImgRaw&r=0';
  const anchoImagen = '730px';
  const altoImagen = '550px';

  return (
    <>
      {props.children({
        handleEmitClick,
        handleAudioClick,
        isEmitting,
        isAudioEnabled,
        status,
        isConnected,
        videoRef,
        canvasRef,
        imagenNoEmision,
        anchoImagen,
        altoImagen
      })}
    </>
  );
}

export default LogicaNegocio;
