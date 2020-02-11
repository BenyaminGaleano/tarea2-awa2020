var context;
var canvas;
var circleRadius;
var px, py;
var nameIn;
var select, log;
var addBtn, deleteBtn;

function start(){
    /* relacionado con el select y sus funciones */
    log = document.getElementById("console");
    nameIn = document.getElementById("name");
    select = document.getElementById("names-select");
    addBtn = document.getElementById("add-button");
    deleteBtn = document.getElementById("delete-button");
    addBtn.onclick = addName;
    deleteBtn.onclick = deleteName;
    /* relacionado con el circulo */
    canvas = document.getElementById("Canvas");
    context = canvas.getContext("2d");
    circleRadius = 15;
    px = canvas.width/3;
    py = canvas.height / 2;
    drawCircle(px, py);
    window.addEventListener("keydown", moveCircle, false);
}

function deleteName() {
    if(select.selectedIndex >= 0){
        let inf = document.createElement("option");
        let temp = select.options[select.selectedIndex].value;
        select.options.remove(select.selectedIndex);
        inf.text = temp+" eliminado";
        log.add(inf,0);
    } else {
        alert("Es necesario seleccionar un nombre de la lista para borrar");
    }
}

function addName() {
    if(nameIn.value=="") return;
    let option = document.createElement("option");
    let inf = document.createElement("option");
    option.text = nameIn.value;
    nameIn.value = "";
    select.add(option);
    inf.text = option.text+"  agregado";
    log.add(inf,0);
}

function drawCircle(posx, posy){
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.arc(posx, posy, circleRadius, 0, 2*Math.PI);
    context.strokeStyle = "#f3015e";
    context.stroke();
    context.fillStyle = "#f3015e";
    context.fill();
}

function moveCircle(e) {
    let buffer = 3;
    switch (e.keyCode) {
        case 37 :
            if (px > circleRadius+1) {
              px = px - buffer;
            }
            break;
            
        case 38 :
            if(py > circleRadius){
                py = py - buffer;
            }
            break;
        case 39 :
            if (px+circleRadius < canvas.width) {
              px = px + buffer;
            }
            break;
        case 40 :
            if (py+circleRadius < canvas.height){
                py = py + buffer;
            }
            break;
        case 13:
            addName();
            return;
        case 46:
            deleteName();
            return;
        }
    drawCircle(px, py);
}

start();