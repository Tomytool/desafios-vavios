let anterior = document.querySelector('#anterior');
let previo = document.querySelector('#previo');
let circulos = document.querySelectorAll('.circulo');
let lineas = document.querySelectorAll('.linea');
let index = 0;
console.log(circulos);
console.log(lineas);

const controlador = (elemento) => {
  if ((elemento > 4)) {
    index = 4;
  }
  if (elemento < 1) {
    index = 1;
  }
};

anterior.addEventListener('click', () => {
  console.log('anterior');
  controlador(index);
  console.log(index)
  circulos[index].classList.remove('circulos_activo');
    lineas[(index - 1)].classList.remove('lineas_activo');
  index = index - 1;
});
previo.addEventListener('click', () => {
  console.log('previo');
  index = index + 1;
  controlador(index);
  console.log(index);
    circulos[index].classList.add('circulos_activo');
    lineas[(index - 1)].classList.add('lineas_activo');
});
