import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "../../services/Axios";

function Estudiantes() {
  const [estudiantes, setEstudiantes] = useState([]);

  const urlImage = "http://localhost:4000/imagenes/";
  const params = useParams();

  const consultarEstudiantes = async () => {
    const consultarestudiante = await Axios.get(
      "alumno/consultarAlumno/" + params.carrera
    );
    setEstudiantes(consultarestudiante.data);
    console.log(consultarestudiante.data);
  };

  useEffect(() => {
    consultarEstudiantes();
  }, []);

  return (
    <div>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        {estudiantes.map((estudiante) => {
          return (
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src={urlImage + estudiante.filename}
                  class="d-block w-30 mx-auto"
                  alt="..."
                />
              </div>
              <div class="carousel-caption d-none d-md-block">
                <h5>{estudiante.nombre}</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
          );
        })}

        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Estudiantes;
