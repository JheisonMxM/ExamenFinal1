import React from "react"
import "./CardContainer.css"
import { Desc } from "./Descripcion"
import { Cantidad } from "./Cantidad"
import { Head } from "./Header"


const CardContainer = () => {
  return (
    <div className="card-container">
        <img src="../static/fondo.png" alt="" style={{borderBlock:"15px"}} />
         <Head/>
         <Desc/>
         <Cantidad/>
    </div>
  );
};
export default CardContainer;