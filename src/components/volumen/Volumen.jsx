import { useState, useRef, useEffect } from "react"
import './volumen.css';
import { FichSeguim } from "./ficheroBoxAdj";
export const Volumen = ({history, onClick}) => {

  const refVol = useRef(null);
  console.log('historyyyy', history);
  const [features, setfeatures] = useState([{tit:'Relevo', id:0}, {tit:'Dependiente', id:1},{tit:'objetivos', id:2},{tit:'Trabado', id:3},{tit:'No se', id:4}]);
  
  const onClick1 =(state, id, hist) => {

    console.log(history, state);
    const histState = {hist: hist, id:id, state: state }; 
    onClick(histState);
  };
  const onClick2 =(event) => {
    const refVol = event.nativeEvent.path[2];
    // if(refVol.style.transform.rotateX >= 0) refVol.style.transform = `rotateX(${60}deg)`;
    // else 
    refVol.querySelector('.top1').style = 'background-color: red';
    console.log('refVOLLLL',refVol.querySelector('.top1'));
    refVol.style.transform = `rotateX(-${60}deg)`;
    // refVol.style.transform = `rotateX(${60}deg)`;
    // const histState = {hist: hist, id:id, state: state }; 
    // onClick(histState);

  };

  const onMouseMovee = (event) => {
    
    const refVolNat = event.nativeEvent;
    const refVol = refVolNat.path[2];
    console.log('onMouseMovee', event.pageX, event.pageY, refVolNat.layerX, refVolNat, {refVol});
     if(55 <= refVolNat.layerX <= 90) {
      refVol.style.transform = `rotateY(${(55 - refVolNat.layerX)}deg)`;
    }    
  }

  const onMouseLeavee = (event) => {
    
    const refVol = event.nativeEvent.path[2];
    console.log('onMouseLeaveeVolumen', refVol)
    refVol.style.transform = `rotateY(0deg)`;
  }
  
  return (
  <>
      <div class="ex2" >
        <div class="cube" onMouseLeave={event => onMouseLeavee(event)}>
          <div class="sideFB front1" onMouseMove={event => onMouseMovee(event)} onClick={(event) => onClick2(event)}><a class="tituloo">{history.hist}</a></div>
          <div class="sideFB back1">mas acciones</div>
          {            
            features.map( (feature) => ( 
                    <FichSeguim 
                      key={feature.id}
                      feature={feature} 
                      zSpa={ features.length/6.5 * feature.id}
                    />

                    )) 
          } 
          <div class="sideRL right1"><button class="butside" onClick={() => onClick1('next', history.id, history.hist)}>GO</button></div> 
          <div class="sideRL left1"><button class="butside" onClick={() => onClick1('prev', history.id, history.hist)}>BACK</button></div>
          <div class="sideTB top1">adjuntos</div>
          <div class="sideTB bottom1">filtros</div>
        </div>
      </div>  
  </>
  )
}
// style="transform: rotateX(15deg)"${features.length / 6.5}?
