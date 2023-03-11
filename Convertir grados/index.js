let grados = document.getElementById('grados_celcius');
let resultado = document.getElementById('resultado');
let conversor = document.getElementById('convertir-f');
resultado.innerText = 0;
let farenhet = 0;

grados.addEventListener('input', () => {
    resultado.innerText = grados.value;
})

const convertir = () => {
  farenhet = (grados.value * 9) / 5 + 32;
  conversor.innerText = farenhet;
}