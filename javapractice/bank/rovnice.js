
const ctverec = (a)=>{
    return a*a;
}

const hypotenuse= (a,b)=>{
    return Math.sqrt(ctverec(a)+ctverec(b));
}

// let a=parseInt(prompt("zadejte hodnotu"));
// let b=parseInt(prompt("zadejte druhou hodnotu"));
// alert(hypotenuse(a,b));
// console.log(hypotenuse);

const salary =(pay,hour,day)=>{
    return pay*hour*day;
}
let vyplata =salary();
const taxedSalary=(salary,tax)=> {
    return salary*(1-tax);
}




















// let zadani=prompt("Zadejte cislo");
// for(i=zadani.length;i===0;i--){
//     switch (zadani[i]) {
//             case "x":
//             vysledek+=1;
//             break;
//             case "v":
//             vysledek+=5;
//             break;
//             case "d":
//             vysledek+=10;
//             break;
//             case "l":
//             vysledek+=1;
//             break;
//             case "l":
//             vysledek+=1;
//             break;
//             case "l":
//             vysledek+=1;
//             break;
//         default:
//             break;
//     }
// }