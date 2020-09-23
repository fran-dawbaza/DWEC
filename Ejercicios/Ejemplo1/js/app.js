let imgOriginal=true;

function holaMundo(){
    console.log("Hola Mundo");
    document.write("Holaaaaa!");
    document.write('<br /><a href="index.html">Recupera el contenido</a>');
}

function modificaH2(){
    //let variable = document.getElementById("h2");
    //console.log(variable);
    //variable.innerHTML="contenido cambiado";
    document.getElementById("h2").innerHTML="contenido modificado!!!";
}

function cambiaImg(){
    if (imgOriginal) {
        document.getElementById("gatitos").src="https://cf.ltkcdn.net/gatos/images/std/236641-699x450-etapas-desarrollo-gatitos.jpg";
        imgOriginal=false;
    }
    else {
        document.getElementById("gatitos").src="https://www.purina.es/sites/g/files/mcldtz1656/files/2017-11/Bringing-Your-Kitten-Home_0.jpg";
        imgOriginal=true;
    }
}

function cambiaEstilo(){
    let miTexto = document.getElementById("texto");
    miTexto.style.fontSize="24px";
    miTexto.style.color="red";
}

document.getElementsByTagNameNS()