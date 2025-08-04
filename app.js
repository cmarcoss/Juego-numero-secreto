//let parrafo=document.querySelector("p");
//parrafo.innerHTML="Indica un numero del 1 al 10";
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


function asignarTextoElemento(elemento, texto) {
    let elementoHTML= document.querySelector(elemento);//declarando las funciones texto y elemento
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroUsuario= parseInt(document.getElementById("valorUsuario").value);
    //console.log(intentos);
    if (numeroSecreto===numeroUsuario) //validacion de tipo y valor
    {
        asignarTextoElemento("p",`¡Acertaste el numero! en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`);
        document.getElementById('reiniciar').removeAttribute('disabled');//activa el boton nuevo juego
    } else {
        //el usuario no acerto
            if (numeroUsuario>numeroSecreto){
                asignarTextoElemento("p","El numero es menor ");
            } else {
                asignarTextoElemento("p","El numero es mayor");
            }
            intentos++;
            limpiarCaja();
            
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';  
}
function generarNumeroSecreto() 
{
    let numeroGenerado = Math.floor(Math.random()*10+1);
        console.log (numeroGenerado);
        console.log(listaNumerosSorteados);
        //si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length==numeroMaximo)
    {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles')
    } else
    {
        //si el numero generado esta incluido en la lista
            if(listaNumerosSorteados.includes(numeroGenerado))
            {
            return generarNumeroSecreto();
        
            } else 
            {
                listaNumerosSorteados.push(numeroGenerado);
                return numeroGenerado;
            }
    }
}
function condicionesIniciales(){
    asignarTextoElemento("h1","Juego del numero secreto");
    asignarTextoElemento("p","Elige un numero del 1 al 10");
    numeroSecreto = generarNumeroSecreto();
    intentos=1;
}

function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    //indicar msj de inicio
    //generar el numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //desabilitar el boton de nuevo juejo
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();
