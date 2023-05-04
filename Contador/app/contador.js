let numeroContador = document.querySelector('#numeroContador');
let botonIncrementar = document.querySelector('#incrementar');
let botonResetear = document.querySelector('#resetear');
let botonDecrementar = document.querySelector('#decrementar');
let contador = 0;

numeroContador.innerHTML = contador;

const incrementar=()=>{
    contador +=1;
    numeroContador.innerHTML = contador;
}
const decrementar=()=>{
    contador -=1;
    numeroContador.innerHTML = contador;
}
const resetear=()=>{
    contador=0;
    numeroContador.innerHTML = contador;
}

botonIncrementar.addEventListener('click',incrementar);
botonDecrementar.addEventListener('click', decrementar);
botonResetear.addEventListener('click', resetear);




