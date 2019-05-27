
let ucet1=["000256784",790];
let ucet2=["000986056",5600];
let ucet3=["001546238",78065];
let ucet4=["030987456",120910];
let zadani=0;
let akce=" ";
let castka=0;
zadani=prompt("Zadejte číslo svého účtu");


    switch (zadani) {
        case "000256784":
        akce=prompt("Zadejte akci");
            if (akce==="balance"){
            alert("Stav vaseho konta je: "+ucet1[1]+" euro.");}
            else if (akce==="vyber"){
                castka=parseInt(prompt("Zadejte, kolik chcete vybrat"));
                if (castka<=ucet1[1]){
                    alert("Vas zustatek je: "+(ucet1[1]-castka) +" euro");
                    ucet1[1]=ucet1[1]-castka;
                    console.log(castka);
                    console.log(ucet1[1]);
                    }
                    else{alert("Zustatek na vašem úctu není dostatecný")}
            }
            else {alert("Neznama operace.")}

            break;
        case "000986056":
        akce=prompt("Zadejte akci");
        if (akce==="balance"){
            alert("Stav vaseho konta je: "+ucet2[1]+" euro.");}
            else if (akce==="vyber"){
                castka=parseInt(prompt("Zadejte, kolik chcete vybrat"));
                if (castka<=parseInt(ucet2[1])){
                    alert("Vas zustatek je: "+(ucet2[2])-castka+" euro");
                    ucet2[1]=ucet2[1]-castka;}
                    else{alert("Zustatek na vašem úctu není dostatecný")}
            }
            else {alert("Neznama operace.")}
            break;
        case "001546238":
        akce=prompt("Zadejte akci");
        if (akce==="balance"){
            alert("Stav vaseho konta je: "+ucet3[1]+" euro.");}
            else if (akce==="vyber"){
                castka=parseInt(prompt("Zadejte, kolik chcete vybrat"));
                if (castka<=ucet3[1]){
                    alert("Vas zustatek je: "+(ucet3[1]-castka) +" euro");
                    ucet3[1]=ucet3[1]-castka;}
                    else{alert("Zustatek na vašem úctu není dostatecný")}
            }
            else {alert("Neznama operace.")}
            break;
        case "030987456":
        akce=prompt("Zadejte akci");
        if (akce==="balance"){
            alert("Stav vaseho konta je: "+ucet4[1]+" euro.");}
            else if (akce==="vyber"){
                castka=parseInt(prompt("Zadejte, kolik chcete vybrat"));
                if (castka<=ucet4[1]){
                    alert("Vas zustatek je: "+(ucet4[1]-castka) +" euro");
                    ucet4[1]=ucet4[1]-castka;}
                    else{alert("Zustatek na vašem úctu není dostatecný")}
            }
            else {alert("Neznama operace.")} 
            break;
    
        default:alert("Spatne zadane cislo uctu.")
         break;
    }
    document.getElementById("head").innerHTML="Zalozna";
