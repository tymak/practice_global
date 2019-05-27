
let number1=null;
let number2=null;
let vysledek=null;
operator=null;
const nacti=()=>{
    
    zadani=(document.querySelector('#zadani')).value;
    document.getElementById("vysledek").innerHTML=zadani;
    number1=zadani;
    
    document.getElementById('zadani').value = null;
    operator="plus"
     
   
}
const odecti=()=>{
    
    zadani=(document.querySelector('#zadani')).value;
    document.getElementById("vysledek").innerHTML=zadani;
    number1=zadani;
    
    document.getElementById('zadani').value = null;
 operator="minus"
     
   
}
const secti=()=>{
number2=(document.querySelector("#zadani")).value;
if(operator==="plus"){
vysledek=parseInt(number2)+parseInt(number1);}else{vysledek=parseInt(number1)-parseInt(number2)

}

document.getElementById("vysledek").innerHTML=vysledek;
document.getElementById('zadani').value = null;
console.log(document.getElementById("uvod").textContent);
}
