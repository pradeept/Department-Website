var c_2021 = document.querySelector(".counter-2021");
var c_2022 = document.querySelector(".counter-2022");


c_2021.innerHTML = 0;
c_2022.innerHTML = 0;

let counts=setInterval(updated,50);
let upto=0;
function updated(){
    upto++;
    c_2021.innerHTML = upto;
    c_2022.innerHTML = upto;
        if(upto == 24){
            c_2021 = 24;
        }
        else if(upto == 69){
            clearInterval(counts)
        }
}    