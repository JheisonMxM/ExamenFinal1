import React from "react";
import "./Cantidad.css";
import { Icon } from '@iconify/react';

export const Cantidad = (props) => {
    return (

        <div className="cantidad-conatiner">
            <div className="cant_container">
            <div className="button"><Icon icon="ic:twotone-minus"  color="#FFFFFF" /></div>
            <snap >1</snap>
            <div className="button2"><Icon icon="ic:outline-plus"  color="#FFFFFF" /></div>
            </div>
        </div>   
    
            
      )
};

