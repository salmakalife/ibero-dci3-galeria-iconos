var iconos = [
  {icono: "fa-kiss-beam", 
  icono: "fa-laugh-beam", 
  icono: "fa-grin-hearts",
  icono: "fa-meh-rolling-eyes",
  icono: "fa-hiking", 
  icono: "fa-heart", 
  icono: "fa-running", 
  icono: "fa-smile"}
];

function mostrarIconoPrincipal(icono) {
  var mainIcon = document.getElementById("main_icon");
  mainIcon.classList = "fas";
  mainIcon.classList.add(icono);
}

function imprimirIconos(iconos, index){
  var lista = document.getElementById("icon_input");
    lista.insertAdjacentHTML('beforeend',
    `<li class="icons_list">
    <div class="actions">
    <a><i class="fa fa-times" onclick="eliminarIcono(`+ index +`)"></i></a>
    `);
}
function imprimirTodosLosIconos() {
  document.getElementById("icons_list").innerHTML = "";
  iconos.forEach(imprimirIconos);
}

function agregarIcono(){
  var icono = document.getElementById("icon_input").value;
  iconos.push({iconos: icono});
  imprimirTodosLosIconos(); 
}

function eliminarIcono(index){
    iconos.splice(index, 1);
    imprimirTodosLosIconos();
}
function imprimirTodosLosPendientes() {
  document.getElementById("icon_input").innerHTML = "";
  iconos.forEach(imprimirIconos);
}
