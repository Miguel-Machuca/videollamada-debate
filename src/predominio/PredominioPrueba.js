import React, { useState, useEffect, useRef } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:3000');

const LogicaNegocio = ({ children }) => {
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
  }, []);

  const publicarMensaje = (msg) => {
    setStatus(msg);
  };

  const loadCamara = (stream) => {
    streamRef.current = stream;
    if (videoRef.current) {
      videoRef.current.srcObject = stream;
      publicarMensaje('camara funcionando');
    }
  };

  const errorCamara = () => {
    publicarMensaje('camara ha fallado');
  };

  const verVideo = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const video = videoRef.current;

    context.save();
    context.scale(-1, 1);
    context.drawImage(video, -canvas.width, 0, canvas.width, canvas.height);
    context.restore();

    socket.emit('stream', canvas.toDataURL('image/webp'));
  };

  const handleEmitClick = () => {
    if (isEmitting) {
      clearInterval(emitIntervalRef.current);
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
        streamRef.current = null;
      }
      setIsEmitting(false);
      publicarMensaje('emisión detenida');
    } else {
      navigator.mediaDevices.getUserMedia({ video: true, audio: isAudioEnabled })
        .then(loadCamara)
        .catch(errorCamara);

      emitIntervalRef.current = setInterval(verVideo, 300);
      setIsEmitting(true);
      publicarMensaje('emitiendo...');
    }
  };

  const handleAudioClick = () => {
    setIsAudioEnabled(prev => !prev);
  };

  return (
    <>
      {children({
        handleEmitClick,
        handleAudioClick,
        isEmitting,
        isAudioEnabled,
        status,
        isConnected,
        videoRef,
        canvasRef
      })}
    </>
  );
}

export default LogicaNegocio;
