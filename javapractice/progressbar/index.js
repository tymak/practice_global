
let sirka = 4; 
let max_sirka=1000;
const update=()=>{
  document.querySelector(".label").innerHTML=sirka+`/`+max_sirka;
  posun.style.width= (sirka/max_sirka)*100+`%`;
}

document.addEventListener('DOMContentLoaded', () => {
  update();
 
const plus=document.querySelector("#plus");
plus.addEventListener("click",doprava);
const minus=document.querySelector("#minus");
minus.addEventListener("click",doleva);
});

const snizit=()=>{
  if(sirka>0){
    sirka--;}
    else {sirka=0;}
    return sirka
}
const zvysit=()=>{
   if(sirka<max_sirka){
    sirka++;}
    else {sirka=10;}
    return sirka
}
const posun=document.querySelector(".knob");
const doprava=()=>{
  zvysit(sirka);
 update();

  
}
const doleva=()=>{
  snizit(sirka);
  update();
  }
