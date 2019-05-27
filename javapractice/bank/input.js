const potvrzeni=()=>{
    const salary =(pay,hour,day)=>{
        return pay*hour*day;
    }
payElement = parseInt(document.querySelector('#pay').value);
hourElement = parseInt(document.querySelector('#hour').value);
dayElement = parseInt(document.querySelector('#day').value);
// vysledek = document.querySelector('#greet');


document.getElementById("vysledek").innerHTML=salary(payElement,hourElement,dayElement);

}