import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import Axios from "../../services/Axios";

function Presentación() {

    const urlImage="http://localhost:4000/imagenes/";

  const [carerras, setCarreras] = useState([]);

  const navigate=useNavigate();

  const consultarCarrera = async () => {
    const consultar = await Axios.get("carrera/consultarCarrera");
    setCarreras(consultar.data);
   // console.log(consultar.data);
  };

  useEffect(() => {
    consultarCarrera();
  }, []);

  return (
    <div>
      <div class="row row-cols-1 row-cols-md-2 g-4">
        {carerras.map((carrera) => {
          return (
            <div class="col">
              <div class="card">
                <img src={urlImage+carrera.filename} class="card-img-top" alt="..." width="100px" height="250px"/>
                <div class="card-body">
                  <h5 class="card-title">{carrera.nombre}</h5>
                  <p class="card-text">
                  <button className="btn btn-primary" onClick={()=>navigate(`/estudiante/${carrera._id}`)}>Ir...</button>
                  </p>
                  
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Presentación;
