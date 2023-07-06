//ICONO MENU HAMBURGUESA
document.querySelector(".icono_menu").addEventListener("click", animacionBarra);

var linea1_barra_menu = document.querySelector(".linea1_barra_menu");
var linea2_barra_menu = document.querySelector(".linea2_barra_menu");
var linea3_barra_menu = document.querySelector(".linea3_barra_menu");
var barraMenu = document.querySelector(".icono_menu")

function animacionBarra(){
    linea1_barra_menu.classList.toggle("activelinea1_barra_menu");
    linea2_barra_menu.classList.toggle("activelinea2_barra_menu");
    linea3_barra_menu.classList.toggle("activelinea3_barra_menu");
}
function cambioColor(){
    
}
//MOVIMIENTO MENU LATERAL
let cerrarBarra = document.querySelector(".nav")
let abrirBarra = document.querySelector(".nav_open")
let iconoMenu = document.querySelector(".icono_menu")
let cerrarIcono = document.querySelector(".icono_menu_close")
let colorSpan = document.querySelector(".icono_menu_close span")

//FUNCION PARA ABRIR Y CERRAR MENU LATERAL
function abrir_cerrar_menu() {
    cerrarBarra.classList.toggle("nav_open");
    iconoMenu.classList.toggle("icono_menu_close")
}

//EVENTO PARA APERTURA Y CIERRE DE MENU
document.getElementById("btn_abrir").addEventListener("click", abrir_cerrar_menu);


//MOVIMIENTO BARRA VERIFICADORA DE SECCION
let inicio = document.querySelector(".seleccionable1")
let sobreMi = document.querySelector(".seleccionable2")
let proyectos = document.querySelector(".seleccionable3")

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
