let textoArea = document.getElementById('textoContador');
let maximo = textoArea.getAttribute('maxlength');
let minimo = 0;
let conteoMax = document.getElementById('conteoMax');
let conteoMin = document.getElementById('conteoMin');

conteoMax.innerText = maximo;
conteoMin.innerText = minimo;

const contador = () => {
  let contador = textoArea.value;
  return contador.length;
};

textoArea.addEventListener('keyup', () => {
  let caracteres = contador();
  conteoMax.innerText = maximo - caracteres;
  conteoMin.innerText= caracteres;
  contador();
});
