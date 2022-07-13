import { useState } from "react"
import { Volumen } from "./volumen/Volumen";
export const Step2 = ({ history, onClick}) => {
  
  console.log('Step2 History', history);
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