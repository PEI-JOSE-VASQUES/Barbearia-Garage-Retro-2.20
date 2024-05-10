let grupo_sele = window.document.getElementById("grupo_sele");
let tela_cor = window.document.getElementById("tela");
let conteu = window.document.getElementById("conteudo");
let lagura = innerWidth;
let altura = innerHeight;
console.log("altura"+altura);

if(altura >= 738 && altura < 838 ){
console.log("altura do if: "+altura);
grupo_sele.style.height = "53vh";
grupo_sele.style.margin = "1vh";

}
else if(altura >= 838){
    console.log("altura do if: "+altura);
    grupo_sele.style.height = "57vh";
    grupo_sele.style.margin = "1vh";
    console.log("altura do else if: "+altura);

}