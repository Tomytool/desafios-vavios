let numerosRomano = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};
let romano = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];

let numero = document.querySelector('#numeroNormal');
let botonConvertir = document.querySelector('#convertir');

let numeroRomano = [];

const extraer = () => {
  let valor = numero.value;
  let extraer = valor.split('');
  let reversoArray = extraer.reverse();
  let arrayFinal = [];

console.log(reversoArray)
    reversoArray.forEach(elemento => {
        if (elemento>0 && elemento<4) {
            console.log(romano[0].repeat(elemento))
        }
        if(elemento==5){
            console.log(romano[1])
        }
        if (elemento<9){
            
            console.log(romano[0].repeat(8-Number(elemento)))
        }
    });
};

botonConvertir.addEventListener('click', extraer);
