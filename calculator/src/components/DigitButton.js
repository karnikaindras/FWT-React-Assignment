import React from 'react';

const DigitButton = function(props){
    return(
        <button type="button" value={props.buttonValue} onClick={props.handleInput}>{props.buttonValue}</button>
        
    )   
}
export default DigitButton;
