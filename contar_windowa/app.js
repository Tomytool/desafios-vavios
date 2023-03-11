const cajas = document.getElementById('cajas');
console.log(cajas)
window.onscroll = function () {
  let valor = document.documentElement.scrollTop;
  if(valor > 120){
    cajas.classList.add('cambio');
  }else{
    cajas.classList.remove('cambio')
  }
  console.log(valor);
};
