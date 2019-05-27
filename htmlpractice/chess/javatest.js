// function prumer(){
//     sum=0;
//     for(i=0;i=4;i++){
//         sum=+sum}
//     return (sum/i)
//     }
//  const week =[9,7,5.5,6,2];
// console.log(prumer(week));

// sazba=parseInt(prompt("Zadejte plat za hodinu"));
// hours=parseInt(prompt("Kolik hodin týdně?"));
// wage=alert("Vase mesicni mzda je " + sazba*hours);

// const exchange_rate=25.695;
// vystup=alert("Vás obnos má hodnotu asi "+Math.round(parseInt(prompt("Kolik mate euro?"))*exchange_rate)+" českých korun.");

// nahodneCislo= Math.floor(Math.random()*5+1)
// display=alert(nahodneCislo);

// hours=[4,8,2,5,7];
// console.log(hours)



// pay=parseInt(prompt("Jaka je vase hodinova mzda?"));
// hours=parseInt(prompt("Kolik hodin denně pracujete?"));
// day=parseInt(prompt("Kolik dní v měsíci jste odpracoval?"));

// function salary (pay,hours,day){
//     return pay*hours*day
// }
// const tax=0.25;


// vystup=alert("Vse mesicni mzda po zdanení je asi "+Math.floor(salary(pay,hours,day)*(1-tax)));

// a=prompt("zadejte hodnotu a");
// b=prompt("zadejte hodnotu b");

// function root (a,b){
//     return Math.sqrt(a*a+b*b)
// }
// alert(root(a,b));

// max=parseInt(prompt("jaky je horní limit?"));
// min=parseInt(prompt("jaky je dolní limit?"));


// nahodneCislo= Math.floor(Math.random()*(max-min+1))  +min;
// alert(nahodneCislo);

// heslo=prompt("Zadejte heslo");
// if (heslo==="sore-thumb-218"){
//     alert("Access granted")
// } else {alert("nice try")}


// // ID
//  let rodneCislo=prompt("zadejte rodne cislo");

// let new_array=rodneCislo.split("/");
// let vystup=new_array[0]+new_array[1];



// if(vystup%11===0){
//     alert("Valid ID, good job")
// } else{alert("Not valid ID. Try again.")}
// let gender;
// let month;
// let day;


// let year="19"+vystup[0]+vystup[1];

// if((vystup[2]+vystup[3])>50){
//     gender= "woman";
//     }
//     else{ gender="man";}
// console.log(gender);
// if (gender==="woman"){
//     month=vystup[2]+vystup[3]-50;
//     }
//     else{month=vystup[2]+vystup[3]}
// day=vystup[4]+vystup[5];

// alert("basic info: datum narozeni: "+ day +"."+month+" "+year+" pohlavi: "+gender)
let zavorky=prompt("zadejte retezec")
let kontrola=true;
let j=0;
for(i=0;i<zavorky.length;i++){
if(zavorky[i]==="("){j++}else {j--}
if (j<0){kontrola=false;}{}
console.log(j);
console.log(kontrola);
}
if (j===0 && kontrola) {alert("validni zavorky")} else{alert("chybne zadani")}