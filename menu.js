
let c1m = window.document.getElementById("c1m"); 
let c2m = window.document.getElementById("c2m"); 
let c3m = window.document.getElementById("c3m"); 
let c4m = window.document.getElementById("c4m"); 
let c5m = window.document.getElementById("c5m"); 
var c1m_ = "PERFIL.png";
var c2m_ = "LOCAL.png";
var c3m_ = "AGENDA.png";
var c4m_ = "QUE_SOMOS.jpg";
var c5m_ = "POLITICA.png";

c1m.setAttribute("src", c1m_);
c2m.setAttribute("src", c2m_);
c3m.setAttribute("src", c3m_);
c4m.setAttribute("src", c4m_);
c5m.setAttribute("src", c5m_);
let im = window.document.getElementById("im"); 
c1m.setAttribute("src", "PERFIL.png");
function fun_items(item){
  let loc = "perfil.htm";
  if(item == 1){
    open(loc,"_self");
    localStorage.setItem('chave', c1m_);
  }
if(item == 2){
  open(loc,"_self");
  localStorage.setItem('chave', c2m_);
}
if(item == 3){
  open(loc,"_self");
  localStorage.setItem('chave', c3m_);
}
if(item == 4){
  open(loc,"_self");
  localStorage.setItem('chave', c4m_);
}
if(item == 5){
  open(loc,"_self");
  localStorage.setItem('chave', c5m_);
}
}

function fun_cb(v){

}