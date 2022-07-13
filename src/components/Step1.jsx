import { useState } from "react"
import { Volumen } from "./volumen/Volumen";

export const Step1 = ({ history, onClick}) => {
  
  console.log('step1History', history);
  const [inputValue, setInputValue] = useState();
  const [inputValue1, setInputValue1] = useState('null');
  const [inputValue2, setInputValue2] = useState('null');
  const [inputValue3, setInputValue3] = useState('null');
  const [inputValue4, setInputValue4] = useState('null');
  const [inputValue5, setInputValue5] = useState('null');

  const onChangeStat =({hist, id, state}) => {
    const histState = {hist: hist, id:id, state: state}; 
    onClick(histState);
    setInputValue1(state)
  };
  // const onMouseMove = ({pageX, pageY}) => {
  //   console.log(pageX, pageY);
  // }

  return (
    <> 
    <Volumen 
      key={history.id}
      history={history}
      onClick={(value) => onChangeStat(value)}
    />
      
    </>
  )
}
