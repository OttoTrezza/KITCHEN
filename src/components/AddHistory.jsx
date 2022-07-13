import { useState } from "react"



export const AddHistory = ({onNewHistory}) => {

    const [inputValue, setInputValue] = useState();

    const onInputChange =({target}) => {
        setInputValue( target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length <=1) return;
        // setCategories(categories =>[...categories, inputValue])
        onNewHistory( inputValue.trim())
        setInputValue('');
    }
    return ( 
        // <form onSubmit={(event) => onSubmit(event)}>
        <form onSubmit={onSubmit}>
            <input 
                type="text"
                placeholder="Que mas ?"
                value={inputValue}
                onChange={ ( event ) =>  onInputChange(event)}
            />
      </form>
    )
}