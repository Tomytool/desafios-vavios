let rojo;
let azul;
let verde;
const eleccionColor = () => {
  rojo = Math.ceil(Math.random() * (1 + 255));
  azul = Math.ceil(Math.random() * (1 + 255));
  verde = Math.ceil(Math.random() * (1 + 255));
  let cuerpo = document.getElementById("cuerpo");
  let color = "rgb"+"("+rojo + ',' + azul +',' +verde+")" ;
   cuerpo.style.backgroundColor= color;
  let descripcionColor =document.getElementById("color");
  descripcionColor.innerText=color;

};
 