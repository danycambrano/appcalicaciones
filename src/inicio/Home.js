import React, { useState, useEffect } from "react";
import Axios from "../services/Axios";

import {useNavigate} from 'react-router-dom';

function Home() {
  const [alumnos, setAlumnos] = useState([]);

  const navigate=useNavigate();

  const buscarAlumnos = async () => {
    const buscar = await Axios.get("alumno/consultarAlumno");
    setAlumnos(buscar.data);
    console.log(buscar.data);
  };

  const eliminarAlumno = async (id) => {
    if (window.confirm("¿Esta seguro de eliminar el dato?")) {
      const eliminar = await Axios.delete("/alumno/eliminarAlumno/" + id);
      console.log(eliminar);
    }

    buscarAlumnos();
  };

  useEffect(() => {
    buscarAlumnos();
  }, []);

  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Matricula</th>
            <th scope="col">Nombre</th>
            <th scope="col">Edad</th>
            <th scope="col">Sexo</th>
            <th scope="col">Dirección</th>
            <th scope="col">Eliminar</th>
            <th scope="col">Actualizar</th>
          </tr>
        </thead>
        {alumnos.map((alumno) => {
          return (
            <tbody>
              <tr>
                <th>{alumno.matricula}</th>
                <td>{alumno.nombre}</td>
                <td>{alumno.edad}</td>
                <td>{alumno.sexo}</td>
                <td>{alumno.direccion}</td>
                <td>
                  <button
                    type="button"
                    class="btn btn-danger"
                    onClick={() => eliminarAlumno(alumno._id)}
                  >
                    Eliminar
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    class="btn btn-info"

                    onClick={()=>navigate(`/formulario/${alumno._id}`)}
                  >
                    Editar
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default Home;
