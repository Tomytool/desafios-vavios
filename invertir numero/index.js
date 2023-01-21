function ingreso_num() {
  $("p").remove("");
  const numero_ing = document.getElementById("ingreso").value;
  const numero_array = numero_ing.split("");
  const reverso = numero_array.reverse();
  let solucion = reverso.join("");
  console.log(solucion);
  let solucion_num=parseInt(solucion);
  console.log(typeof(solucion_num));
  $(".respuesta").append("<p>" + solucion_num + "</p>");
  document.getElementById("myform").reset();
}
