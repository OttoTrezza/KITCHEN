import { useState, useRef, useEffect } from "react"
import './volumen.css';

export const FichSeguim = ({feature, zSpa}) => {

 const refVolo = zSpa;
  console.log('featureyyy', feature, zSpa, refVolo);
  const [inputs, setInputs] = useState(0);
  
//   setInputs(inputs + 1);
  
    return (
    <div class="sideRL" Style={`transform: rotateY(90deg) translateZ(${refVolo}em); background-color:green;`} >{feature.tit}</div>
    )
    
}