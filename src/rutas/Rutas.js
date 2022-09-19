import React from 'react';
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Layouts from '../components/layouts/Layouts';
import Formulario from '../components/formularios/Formulario';
//Rutas para las vistas
import Home from '../inicio/Home';
import Presentación from '../components/GUI/Presentación';
import Estudiantes from '../components/GUI/Estudiantes';
import NotFound from '../inicio/NotFound';

function Rutas() {
  return (
    <div>
        <Router>
            <Layouts>
                <Routes>
                    <Route exact path='/tabla' element={<Home/>}/>
                    <Route exact path='/formulario' element={<Formulario/>}/>
                    <Route exact path='/formulario/:id' element={<Formulario/>}/>
                    <Route exact path='/' element={<Presentación/>}/>
                    <Route exact path='/estudiante/:carrera' element={<Estudiantes/>}/>
                    <Route path='*' element={<NotFound/>}/>
                </Routes>
            </Layouts>
        </Router>
    </div>
  )
}

export default Rutas