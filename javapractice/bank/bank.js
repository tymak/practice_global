
let ucet1=["000256784","790"];
let ucet2=["000986056","5 600"];
let ucet3=["001546238","78 065"];
let ucet4=["030987456","120 910"];
let zadani=0;
let akce=" ";
let castka=0;
zadani=prompt("Zadejte číslo svého účtu");
akce=prompt("Zadejte akci");

    switch (zadani) {
        case "000256784":
            if (akce==="balance"){
            alert("Stav vaseho konta je: "+ucet1[1]+" euro.");}
            else if (akce==="vyber"){
                castka=parseInt(prompt("Zadejte, kolik chcete vybrat"));
                if (castka<=parseInt(ucet1[1])){
                    alert("Vas zustatek je: "+(parseInt(ucet1[1])-castka) +" euro");
                    ucet1[1]=parseInt(ucet1[1])-castka;
                    }
                    else{alert("Zustatek na vašem úctu není dostatecný")}
            }
            else {alert("Neznama operace.")}

            break;
        case "000986056":
        if (akce==="balance"){
            alert("Stav vaseho konta je: "+ucet2[1]+" euro.");}
            else if (akce==="vyber"){
                castka=parseInt(prompt("Zadejte, kolik chcete vybrat"));
                if (castka<=parseInt(ucet2[1])){
                    alert("Vas zustatek je: "+(parseInt(ucet2[2])-castka)+" euro");
                    ucet2[1]=parseInt(ucet2[1])-castka;}
                    else{alert("Zustatek na vašem úctu není dostatecný")}
            }
            else {alert("Neznama operace.")}
            break;
        case "001546238":
        if (akce==="balance"){
            alert("Stav vaseho konta je: "+ucet3[1]+" euro.");}
            else if (akce==="vyber"){
                castka=parseInt(prompt("Zadejte, kolik chcete vybrat"));
                if (castka<=parseInt(ucet3[1])){
                    alert("Vas zustatek je: "+(parseInt(ucet3[1])-castka) +" euro");
                    ucet3[1]=parseInt(ucet3[1])-castka;}
                    else{alert("Zustatek na vašem úctu není dostatecný")}
            }
            else {alert("Neznama operace.")}
            break;
        case "030987456":
        if (akce==="balance"){
            alert("Stav vaseho konta je: "+ucet4[1]+" euro.");}
            else if (akce==="vyber"){
                castka=parseInt(prompt("Zadejte, kolik chcete vybrat"));
                if (castka<=parseInt(ucet4[1])){
                    alert("Vas zustatek je: "+(parseInt(ucet4[1])-castka) +" euro");
                    ucet4[1]=parseInt(ucet4[1])-castka;}
                    else{alert("Zustatek na vašem úctu není dostatecný")}
            }
            else {alert("Neznama operace.")} 
            break;
    
        default:alert("Spatne zadane cislo uctu.")
         break;
    }

