import React from "react";
import "./Descripcion.css";
import { Icon } from '@iconify/react';
export const Desc = (props) => {
    return (

        <div className="text-container">
           <span className="txt_1">Standard Cactus</span>
           <span className="txt_2">Succulent</span>
           <span className="price">$20.0</span>
           <div className="calif-container">
           <Icon icon="ic:baseline-star" style={{ width:"45px", height:"45px", color:"#FFD748"}}/> 
           <Icon icon="ic:baseline-star" style={{ width:"45px", height:"45px", color:"#FFD748"}}/> 
           <Icon icon="ic:baseline-star" style={{ width:"45px", height:"45px", color:"#FFD748"}}/> 
           <Icon icon="ic:baseline-star" style={{ width:"45px", height:"45px", color:"#FFD748"}}/> 
           <span className="txt_3">2 reviews</span>
           </div>
        </div>   
    
            
      )
};



