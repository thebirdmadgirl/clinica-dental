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