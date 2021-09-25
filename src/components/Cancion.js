import React, { Fragment } from "react";

const Cancion = ({ letra }) => {
   if (!letra.length) return null;
   return (
      <Fragment>
         <h2>Letra cancion</h2>
         <p className="letra">{letra}</p>
      </Fragment>
   );
};

export default Cancion;
