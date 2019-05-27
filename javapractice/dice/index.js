
console.log("hello");


const inicializace=()=>{
    for(let i=0;i<6;i++){
        let tag= document.querySelector("#obrazek"+i);
        tag.addEventListener("click",roll);
    }
}

const roll =(event)=>{
    console.log(event.target.textContent);
    let posun =parseInt(event.target.textContent)-1;
  let x=Math.floor((Math.random()*6)+1);
  switch (x) {
    case 1:
        document.querySelector("#obrazek"+posun).className=("side0");
    break;
    case 2:
        document.querySelector("#obrazek"+posun).className=("side1");  
    break;
    case 3:
        document.querySelector("#obrazek"+posun).className=("side2"); 
    break;
    case 4:
        document.querySelector("#obrazek"+posun).className=("side3"); 
    break;
    case 5:
        document.querySelector("#obrazek"+posun).className=("side4"); 
    break;
    case 6:
        document.querySelector("#obrazek"+posun).className=("side5"); 
    break;
  }
console.log(document.querySelector("#obrazek"+posun).className);
}


















document.addEventListener('DOMContentLoaded', inicializace);