import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import Presentacion from "../presentacion/PresentacionPrueba";
function router(props) {
    return (
        <BrowserRouter>        
                <Routes>
                    <Route path={'/prueba'} element={<Presentacion />} /> 
                </Routes>
        </BrowserRouter>
    );
}

export default router;