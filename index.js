let imagem = window.document.getElementById("logo");
let g = 0;
let saiu = false;
var rrr = window.document.getElementById("rrr");
function sair() {
    if (!saiu) {
        saiu = true;
    }
}

setInterval(() => {
    if (g < 1) {
        g += 0.001;
    } else {
        sair();
        // Chamada para obter a quantidade de caracteres do arquivo de texto
var quantidadeCaracteres = Android.obterQuantidadeCaracteres();
rrr.innerText=quantidadeCaracteres;
if(quantidadeCaracteres > 0){
    open("menu.htm", "_self");
}
else if(quantidadeCaracteres <= 0){
    open("página.htm", "_self");
}
    }
    console.log(g);
    imagem.style.opacity = g;
}, 7);