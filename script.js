/*Script del Menu Hamburguesa*/
function llamar(){
    let botonera=document.querySelector("#botonera");
        botonera.classList.toggle("botonera-open");
        botonera.style.transition="0.5s";
    let menu=document.getElementById("menu");
        menu.querySelector("#menu .fa-bars").classList.toggle("fa-xmark");
    }

//galeria
let num=1;
function adelante(){
num++;
if(num>12)
num=1;
    let img=document.getElementById("img");
        img.src="img/"+"img0"+num+".png";
}
function atras(){
num--;
if(num<1)
num=12;
    let img=document.getElementById("img");
        img.src="img/"+"img0"+num+".png";
}
/*Script del Header*/
window.addEventListener("scroll",Abajo);
function Abajo(){
    let header=document.getElementById("header");
    let ypos=window.scrollY;
if(ypos>300){
    header.style.background="#0e438a";
    header.style.transition="0.5s";
}
else{
    header.style.background="none";
    header.style.transition="0.5s";
}
}

//Preloader con Javascript
var preloader=document.getElementById('preloader');
setTimeout(function(){
    preloader.style.transition="0.5s";
    preloader.style.visibility="hidden";
    
},1000);
//Script de Preloader
/*var contenido=document.getElementById('contenido');
setTimeout(function(){
    contenido.classList.add('cerrar');
    document.body.style.overflowY="visible";
},9000);*/

//Boton Subir
window.addEventListener('scroll', Subir);
    function Subir(){
var subir=document.getElementById("subir");
var npos=window.pageYOffset;
        if (npos>300){
            subir.style.display="block";
            subir.style.transition="0.5s";
        }
        else{
            subir.style.display="none";
            subir.style.transition="0.5s";
        }
    }
