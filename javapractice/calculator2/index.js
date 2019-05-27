let result = 0;
let operator=null;
let inputElm=0;

const cleatInput=()=>{
  document.querySelector('.calc__input').value=0; 
  inputElm=0;}


const updateResult=()=>{
  resultElm = document.querySelector('.calc__result')
  document.querySelector('.calc__input').value = result;
  resultElm.textContent = result;}



const clean=()=>{
  result=0;
  updateResult();
  cleatInput();
}


const operace=()=>{
let inputElm = document.querySelector('.calc__input');
  const number = parseInt(inputElm.value);
  switch (operator) {
    case "plus":
    result += number;
    

      break;
      case "minus":{
        result -= number;
    
    break;
      }
      case "nasobeni":
      result*=number;
     
      break;
    case "deleni":
    result/=number;
      break;
    default:result=number;
      break;
  }
  updateResult();
  cleaInput();
}

const secti=()=>{
operace();
operator="plus";

}
const odecti=()=>{
operace();
operator="minus";

 }
const nasob=()=>{
operace();
operator="nasobeni";

}

const vydel=()=>{
 operace();
operator="deleni";

}

const rovnase=()=>{
operace();
operator=null;
}