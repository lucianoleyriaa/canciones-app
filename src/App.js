import "./App.css";
import Info from "./components/Info";
import { useEffect, useState, Fragment } from "react";
import React from "react";
import Formulario from "./components/Formulario";
import axios from "axios";
import Cancion from "./components/Cancion";

function App() {
   const [busquedaLetra, guardarBusquedaLetra] = useState({});
   const [letra, guardarLetra] = useState("");
   const [informacion, guardarInformacion] = useState("");

   useEffect(() => {
      if (Object.keys(busquedaLetra).length === 0) return;

      const consultarApi = async () => {
         const { artista, cancion } = busquedaLetra;

         const url = `https://private-anon-d0704a26be-lyricsovh.apiary-proxy.com/v1/${artista}/${cancion}`;
         const url2 = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;

         const [letra, informacion] = await Promise.all([
            axios(url),
            axios(url2),
         ]);
         console.log(artista, cancion);

         guardarLetra(letra.data.lyrics);
         guardarInformacion(informacion.data.artists[0]);
      };

      consultarApi();
   }, [busquedaLetra]);

   return (
      <Fragment>
         <Formulario guardarBusquedaLetra={guardarBusquedaLetra}></Formulario>
         <div className="container mt-5">
            <div className="row">
               <div className="col-md-6">
                  <Info info={informacion} />
               </div>
               <div className="col-md-6">
                  <Cancion letra={letra} />
               </div>
            </div>
         </div>
      </Fragment>
   );
}

export default App;
