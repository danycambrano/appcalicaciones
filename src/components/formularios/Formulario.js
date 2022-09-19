import React, { useEffect, useState } from "react";
import Axios from "../../services/Axios";

import { useParams, useNavigate } from "react-router-dom";

function Formulario() {
  const variables = {
    _id: "",
    carrera: "",
    matricula: "",
    nombre: "",
    edad: "",
    sexo: "",
    direccion: "",
    image: "",
  };

  const [guardarAlumnos, setguardarAlumnos] = useState(variables);
  const [carreras, setCarreras] = useState([]);

  //variable para comparar el parámetro
  const params = useParams();
  const navigate = useNavigate();

  const obtenerValues = (e) => {
    const { name, value } = e.target;
    setguardarAlumnos({ ...guardarAlumnos, [name]: value });
  };

  const consultarCarrera = async () => {
    const consultarCar = await Axios.get("carrera/consultarCarrera");
    setCarreras(consultarCar.data);
    // console.log(consultarCar.data);
  };

  const guardarDatos = (e) => {
    const formulario = document.getElementById("formalumno");
    const formData = new FormData(formulario);

    Axios.post("/alumno/guardarAlumno", formData).then(() => {
      console.log("Registros guardados exitosamente");
    });
  };

  const oneAlumno = async (id) => {
    const buscarAlumno = await Axios.get("/alumno/consultarUnAlumno/" + id);
    setguardarAlumnos(buscarAlumno.data);
  };

  const updateAlumno = async () => {
    await Axios.put(`/alumno/updateAlumno/${params.id}`, guardarAlumnos).then(
      () => {
        console.log("Datos actualizados correctamente");
      }
    );

    navigate("/");
  };

  const Enviar = (e) => {
    e.preventDefault();

    if (guardarAlumnos._id === "") {
      guardarDatos();
    } else {
      updateAlumno();
    }
  };

  useEffect(() => {
    oneAlumno(params.id);
    consultarCarrera();
  }, [params.id]);

  return (
    <div>
      <form onSubmit={Enviar} id="formalumno">
        <div class="row mb-3">
          <label class="col-sm-2 col-form-label">Carrera</label>
          <div class="col-sm-10">
            <select className="form-select"
            name="carrera"
            value={guardarAlumnos.carrera}
            onChange={obtenerValues}
            aria-label="Default select carerra">
              <option selected>Selecciona la Carrera</option>
              {
                carreras.map(carrera=>{
                  return(
                    <>
                    <option value={carrera._id}>{carrera.nombre}</option>
                    </>
                  )
                })
              }
            </select>
          </div>
        </div>
        <div class="row mb-3">
          <label class="col-sm-2 col-form-label">Matricula</label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              name="matricula"
              value={guardarAlumnos.matricula}
              onChange={obtenerValues}
            />
          </div>
        </div>
        <div class="row mb-3">
          <label class="col-sm-2 col-form-label">Nombre</label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              name="nombre"
              value={guardarAlumnos.nombre}
              onChange={obtenerValues}
            />
          </div>
        </div>
        <div class="row mb-3">
          <label class="col-sm-2 col-form-label">Sexo</label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              name="sexo"
              value={guardarAlumnos.sexo}
              onChange={obtenerValues}
            />
          </div>
        </div>

        <div class="row mb-3">
          <label class="col-sm-2 col-form-label">Dirección</label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              name="direccion"
              value={guardarAlumnos.direccion}
              onChange={obtenerValues}
            />
          </div>
        </div>

        <div class="row mb-3">
          <label class="col-sm-2 col-form-label">Edad</label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              name="edad"
              value={guardarAlumnos.edad}
              onChange={obtenerValues}
            />
          </div>
        </div>

        <div class="row mb-3">
          <label class="col-sm-2 col-form-label">Imagen</label>
          <div class="col-sm-10">
            <input
              type="file"
              class="form-control"
              name="image"
              value={guardarAlumnos.image}
              onChange={obtenerValues}
            />
          </div>
        </div>
        <button type="submit" class="btn btn-primary">
          {guardarAlumnos._id === "" ? "Guardar" : "Actualizar"}
        </button>
      </form>
    </div>
  );
}

export default Formulario;
