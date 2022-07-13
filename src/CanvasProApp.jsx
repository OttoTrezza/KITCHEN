import { useState } from "react";
import { AddHistory } from "./components/AddHistory";
import { BackLog } from "./components/BackLog";
import { Step1 } from "./components/Step1";
import { Step2 } from "./components/Step2";
import { Step3 } from "./components/Step3";
import './components/styles-comp.css';

export const CanvasProApp = () => {
    const [histories, sethistories] = useState([{hist:'Juntar la mesa', id:4, idCol:0, isSelected:false}])
    const [toDoes, settoDoes] = useState([{hist:'Comer la cena', id:3, idCol:1, isSelected:false}]);
    const [onProgresses, setonProgresses] = useState([{hist:'Poner la mesa', id:2, idCol:2, isSelected:false}]);
    const [dones, setdones] = useState([{hist:'preparar la cena', id:1, idCol:3, isSelected:false}]);
    const todos = [...histories, ...toDoes, ...onProgresses, ...dones];


 
    const onAddHistory = (newHistory) =>{

        if(histories.includes(newHistory)) return;

        const totHist = todos.length +1;
        sethistories([{hist:newHistory, id:totHist, idCol:0}, ...histories]);
    }
    const onMoveTask = ({hist, id, state}, idCol) => {
        // const {id} = state;
        console.log('evento click del hijo en el padre', {hist, id, state} );
                switch(idCol){
                    case 0:
                        const histories0 = histories.filter(elem => elem.idCol == 0 && elem.id != id);
                        sethistories('');
                        sethistories([...histories0]); 
                        if (state == 'next') settoDoes([{hist: hist, id: id, idCol: idCol + 1}, ...toDoes]);                        
                    break;

                    case 1:
                        const toDoes0 = toDoes.filter(elem => elem.idCol == 1 && elem.id != id);
                        settoDoes('');
                        settoDoes([...toDoes0]); 
                        if (state == 'prev') sethistories([...histories, {hist: hist, id: id, idCol: idCol - 1}]);                                      
                        else if (state == 'next') setonProgresses([{hist: hist, id: id, idCol: idCol + 1}, ...onProgresses]);
                    break;

                    case 2:
                        const onProgresses0 = onProgresses.filter(elem => elem.idCol == 2 && elem.id != id);
                        setonProgresses('');
                        setonProgresses([...onProgresses0]); 
                        if (state == 'prev') settoDoes([...toDoes, {hist: hist, id: id, idCol: idCol - 1}]);                                             
                        else if (state == 'next') setdones([{hist: hist, id: id, idCol: idCol + 1}, ...dones]);
                    break;
                    case 3:
                        const dones0 = dones.filter(elem => elem.idCol == 3 && elem.id != id);
                    
                        if (state == 'prev') {
                            setdones('');
                            setdones([...dones0]);  
                            setonProgresses([...onProgresses,{hist: hist, id: id, idCol: idCol - 1}]);                                            
                        }
                    break;
                    
                }
            };
   
    return (
      <>
      
        <h1>CANVAS PRO</h1>
        
        <AddHistory onNewHistory={ (value) => onAddHistory(value)} />
                <div class="columnass">
                    <div class="column">
                        <h4>BackLog</h4>
                        { 
                        histories.map( (history) => ( 
                           
                            <BackLog
                                key={history.id} 
                                history={{hist:history.hist, id: history.id,idCol: history.idCol}}
                                onClick={(value) => onMoveTask(value,0)}
                            /> 
                            )) 
                        }
                    </div>
                    <div class="column">
                        <h4>ToDo</h4>
                        { 
                        toDoes.map( (todo) => ( 
                            <Step1
                                key={todo.id} 
                                history={{hist:todo.hist, id: todo.id}}
                                onClick={(value) => onMoveTask(value,1)}
                            /> 
                            )) 
                        }
                    </div>
                    <div class="column">
                        <h4>OnProgres</h4>
                        { 
                        onProgresses.map( (onProgres) => ( 
                            <Step2 
                                key={onProgres.id} 
                                history={{hist:onProgres.hist, id: onProgres.id}}
                                onClick={(value) => onMoveTask(value,2)}
                            /> 
                            )) 
                        }
                    </div>
                    <div class="column">
                        <h4>Done.</h4>
                        { 
                        dones.map( (done) => ( 
                            <Step3 
                                key={done.id} 
                                history={{hist:done.hist, id: done.id}}
                                onClick={(value) => onMoveTask(value,3)}
                            /> 
                            )) 
                        }
                    </div>
                </div>
     
      </>
    )
}