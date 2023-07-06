//ICONO MENU HAMBURGUESA
document.querySelector(".icono_menu").addEventListener("click", animacionBarra);

var linea1_barra_menu = document.querySelector(".linea1-barra-menu");
var linea2_barra_menu = document.querySelector(".linea2-barra-menu");
var linea3_barra_menu = document.querySelector(".linea3-barra-menu");
var barraMenu = document.querySelector("menu_lateral")

function animacionBarra(){
    linea1_barra_menu.classList.toggle("activelinea1-barra-menu");
    linea2_barra_menu.classList.toggle("activelinea2-barra-menu");
    linea3_barra_menu.classList.toggle("activelinea3-barra-menu");
}
//MOVIMIENTO BODY Y MENU LATERAL
let menuLateral = document.getElementById("menu_lateral");
let btnAbrir = document.getElementById("btn_abrir");
let body = document.getElementById("body");

//FUNCION PARA ABRIR Y CERRAR MENU LATERAL
function abrir_cerrar_menu(){
    body.classList.toggle("movimiento_body")
    menuLateral.classList.toggle("movimiento_menu_lateral")
}

//EVENTO PARA APERTURA Y CIERRE DE MENU
document.getElementById("btn_abrir").addEventListener("click", abrir_cerrar_menu);

//OCULTAR MENU SI EL ANCHO ES MENOR A 576PX
if(window.innerWidth < 576){
    body.classList.add("movimiento_body");
    menuLateral.classList.add("movimiento_menu_lateral")
}

//HACIENDO EL MENU RESPONSIVE
window.addEventListener("resize", function(){
    if(window.innerWidth > 576){
        body.classList.remove("movimiento_body");
        menuLateral.classList.remove("movimiento_menu_lateral");
    }else{
        body.classList.add("movimiento_body");
        menuLateral.classList.add("movimiento_menu_lateral");
    }
    /* if(window.innerWidth < 576){
        body.classList.add("movimiento_body");
        menuLateral.classList.add("movimiento_menu_lateral")
    } */
})
//MOVIMIENTO BARRA VERIFICADORA DE SECCION
let inicio = document.querySelector(".seleccionable1")
let sobreMi = document.querySelector(".seleccionable2")
let proyectos = document.querySelector(".seleccionable3")
let contacto = document.querySelector(".seleccionable4")

function cambiarSeleccion() {
    let seleccionada = document.querySelectorAll(".seleccionada");

    if (!this.classList.contains("seleccionada")) {
        seleccionada.forEach(function(seleccion) {
            seleccion.classList.remove("seleccionada");
        });

        this.classList.add("seleccionada");
    }
}

inicio.addEventListener("click", cambiarSeleccion);
sobreMi.addEventListener("click", cambiarSeleccion);
proyectos.addEventListener("click", cambiarSeleccion);
contacto.addEventListener("click", cambiarSeleccion);
