import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import {AuthProvider} from "../context/AuthContext";
import Presentacion from "../presentacion/PresentacionPrueba";
import LoginPresentacion from "../presentacion/LoginPresentacion";
import RegistrarUsuarioPresentacion from '../presentacion/RegistrarUsuarioPresentacion';
import PanelPresentacion from '../presentacion/PanelPresentacion';
import CrearDebatePresentacion from '../presentacion/CrearDebatePresentacion';

function router(props) {
    return (
        <BrowserRouter>        
            <AuthProvider>
                <Routes>
                    <Route path={'/'} element={<LoginPresentacion />} />
                    <Route path={'/prueba'} element={<Presentacion />} />                     
                    <Route path={'/registrarUsuario'} element={<RegistrarUsuarioPresentacion />} />
                    <Route path={'/panel'} element={<PanelPresentacion />} />
                    <Route path={'/crearDebate'} element={<CrearDebatePresentacion />} />
                </Routes>
            </AuthProvider>                
        </BrowserRouter>
    );
}

export default router;

