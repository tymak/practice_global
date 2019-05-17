


let vstupniHodnota="";
let vysledek=0;
let pracovniHodnota=0;
let operator=null;
let memory=0;


document.querySelector(".calc__input").innerHTML=0;
document.querySelector(".calc__output").innerHTML=0;

const onDigit=(event)=>{
    // console.log(event.target.textContent);
    switch (event.target.textContent){
        case "1":
         vstupniHodnota=vstupniHodnota.concat("1");
        break;
        case "2":
        vstupniHodnota=vstupniHodnota.concat("2");
        break;
        case "3":
        vstupniHodnota=vstupniHodnota.concat("3");  
        break;
        case "4":
        vstupniHodnota=vstupniHodnota.concat("4"); 
        break;
        case "5":
        vstupniHodnota=vstupniHodnota.concat("5"); 
        break;
        case "6":
        vstupniHodnota=vstupniHodnota.concat("6"); 
        break;
        case "7":
        vstupniHodnota=vstupniHodnota.concat("7"); 
        break;
        case "8":
        vstupniHodnota=vstupniHodnota.concat("8");
        break;
        case "9":
        vstupniHodnota=vstupniHodnota.concat("9");
        break;
        case "0":
        vstupniHodnota=vstupniHodnota.concat("0");
        break;
        case ",":
        vstupniHodnota=vstupniHodnota.concat(".");
        break;
 }
 document.querySelector(".calc__input").innerHTML=parseFloat(vstupniHodnota);
//  console.log(vstupniHodnota);
}

const nahranidopameti=()=>{
    
    console.log(vstupniHodnota);
    pracovniHodnota=parseFloat(vstupniHodnota);
    console.log(pracovniHodnota);
    
    }

const clearInput=()=>{
    document.querySelector('.calc__input').textContent=0;; 
    vstupniHodnota="0";

}
  
  
  const updateResult=()=>{
    let vysledekElm = document.querySelector('.calc__output');
    vysledekElm.textContent =vysledek;
    
    }
  

const operace=()=>{
    nahranidopameti();
    if (pracovniHodnota===0){pracovniHodnota=memory;}
    
    switch (operator) {
  
   
    
    case "/":
        vysledek/=pracovniHodnota; 
        memory=vysledek;
        
    break;
    case "x":
        vysledek*=pracovniHodnota;
        memory=vysledek;
    break;
    case "+":
        vysledek+=pracovniHodnota;
        memory=vysledek;
    break;
    case "-":
        vysledek-=pracovniHodnota;
        memory=vysledek;
    break;
    default:
        vysledek=pracovniHodnota;
        memory=vysledek;
    break;
  
    }
// console.log(memory);
// console.log(vysledek);
pracovniHodnota=parseFloat(vysledek);
updateResult();
clearInput();
}

const onOperator=(event)=>{
    if (event.target.textContent==="C"){
        memory=0;
        vysledek=0;
        vstupniHodnota=null;
        pracovniHodnota="0";
        clearInput();
        updateResult();

    }
   operace();
   operator=(event.target.textContent); 
//    console.log(vysledek) ;
//    console.log(pracovniHodnota);
//    console.log(memory);
//    console.log(operator);
    
}    
    







for(let i=0;i<11;i++){
    const cislo= document.querySelector("#digit"+i);
       cislo.addEventListener("click",onDigit);
}
for(let i=0;i<6;i++){
    let opr= document.querySelector("#operator"+i);
    opr.addEventListener("click",onOperator);
}

