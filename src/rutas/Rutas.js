import React from 'react';
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Layouts from '../components/layouts/Layouts';
import Formulario from '../components/formularios/Formulario';
//Rutas para las vistas
import Home from '../inicio/Home';
import NotFound from '../inicio/NotFound';

function Rutas() {
  return (
    <div>
        <Router>
            <Layouts>
                <Routes>
                    <Route exact path='/' element={<Home/>}/>
                    <Route exact path='/formulario' element={<Formulario/>}/>
                    <Route exact path='/formulario/:id' element={<Formulario/>}/>
                    <Route path='*' element={<NotFound/>}/>
                </Routes>
            </Layouts>
        </Router>
    </div>
  )
}

export default Rutas