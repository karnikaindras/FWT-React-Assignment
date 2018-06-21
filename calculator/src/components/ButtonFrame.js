import React, { Component } from 'react';
import DigitButton from './DigitButton';

class ButtonFrame extends Component {
  digits = [0,1,2,3,4,5,6,7,8,9]
  operations =['+','-','*','/','%']
  constructor() {
    super();
    this.state = {
     operand1: 13,
     operand2:4,
     result : 0,
     operation: '%',
     calculationString:''
    }
    this.calculateResult = this.calculateResult.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.processCalculationString = this.processCalculationString.bind(this);
    this.clearInput = this.clearInput.bind(this);
  }

  calculateResult(operand1, operand2, operation) {
    console.log('operand1  ' +operand1+' operand 2   '+operand2+' operation '+operation);
    var result = 0;
    if(operand1 ==0 | operand2==0 | operation==null) {
      this.setState({
        calculationString:''
      })
    }

    else {
      switch(operation) {
        case '+': 
          result = parseFloat(operand1)+parseFloat(operand2);
        break;
  
        case '-': {
          console.log('case -')
          result = parseFloat(operand1)-parseFloat(operand2);
        }
        break;
  
        case '*': {
          result = operand1*operand2;
        }
        break;
  
        case '/': {
          result = operand1/operand2;
        }
        break;
  
        case '%': {
          result = operand1%operand2;
        }
        break;
        default: {
          result = parseFloat(operand1)-parseFloat(operand2);
        }
      }
      this.setState({
        calculationString: result
      })
    }
    
  }

  handleInput(event) {
    console.log('event' +event.target.value);
    var newstring = this.state.calculationString+ event.target.value;
    this.setState({
      calculationString: newstring
    })
    console.log(this.state.calculationString);
  }

  processCalculationString() {
    var splitResult = this.state.calculationString.split(/[+,*,/,%,-]/);
    console.log('splitResult' +splitResult);
    var operand1 =0;
    var operand2 =0; 
    var operation= this.state.calculationString.match(/[+,*,/,%,-]/);
    console.log('operation' +operation);
    operand1 =splitResult[0];
    operand2 =splitResult[1];
    this.calculateResult(operand1,operand2, operation[0]);
    
  }

  clearInput() {
    this.setState({
      calculationString:''
    })
  }
   
  render() {
    return (
      <div>
         <input type="text" value={this.state.calculationString} />
         <div>
          {
          this.operations.map(digit => {
            return ( <DigitButton buttonValue= {digit} handleInput={this.handleInput} key={digit}/>)
          })
          }
        </div>
        <br/>
        <div>
          {
          this.digits.map(digit => {
            return ( <DigitButton buttonValue={ digit} handleInput={this.handleInput} key={digit}/>)
          })
          }
        </div>
        <button onClick={this.clearInput}>clr</button>
        <button onClick={this.processCalculationString}>=</button>
        <button onClick={this.handleInput} value=".">.</button>
      </div>
     
    );
  }
  
}


export default ButtonFrame;
