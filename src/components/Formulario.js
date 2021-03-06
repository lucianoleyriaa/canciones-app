import React from "react";
import { useState } from "react";

const Formulario = ({ guardarBusquedaLetra }) => {
   const [busqueda, guardarBusqueda] = useState({
      artista: "",
      cancion: "",
   });
   const [error, guardarError] = useState(false);

   const actualizarState = (e) => {
      guardarBusqueda((prevState) => {
         return { ...prevState, [e.target.name]: e.target.value };
      });
   };

   const buscarInformacion = (e) => {
      e.preventDefault();

      if (artista.trim() === "" || cancion.trim() === "") {
         return guardarError(true);
      }

      guardarError(false);

      guardarBusquedaLetra({ artista, cancion });
   };

   const { artista, cancion } = busqueda;

   return (
      <div className="bg-info">
         {error ? (
            <p className="alert alert-danger text-center p-2">
               Todos los campos son obligatorio
            </p>
         ) : null}
         <div className="container">
            <div className="row">
               <form
                  onSubmit={buscarInformacion}
                  className="col card text-white bg-transparent mb-5 pt-5 pb-2"
               >
                  <fieldset>
                     <legend className="text-center">
                        Buscador letras canciones
                     </legend>
                     <div className="row">
                        <div className="col-md-6">
                           <div className="form-group">
                              <label>Artista</label>
                              <input
                                 type="text"
                                 className="form-control"
                                 placeholder="Nombre artista"
                                 name="artista"
                                 value={artista}
                                 onChange={actualizarState}
                              ></input>
                           </div>
                        </div>
                        <div className="col-md-6">
                           <div className="form-group">
                              <label>Cancion</label>
                              <input
                                 type="text"
                                 className="form-control"
                                 placeholder="Nombre cancion"
                                 name="cancion"
                                 value={cancion}
                                 onChange={actualizarState}
                              ></input>
                           </div>
                        </div>
                     </div>

                     <button
                        className="btn btn-primary float-right"
                        type="submit"
                     >
                        Buscar
                     </button>
                  </fieldset>
               </form>
            </div>
         </div>
      </div>
   );
};

export default Formulario;
