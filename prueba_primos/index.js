function imprimir_primos() {
  $("p").remove("");
  let numero_primo = document.getElementById("ingreso").value;
  
  let imprimir_primo = 1;
  for (let index = 0; index < numero_primo; index++) {
    let contador_primo = 0;
    for (let divisores = 1; divisores <= imprimir_primo; divisores++) {
      if ((imprimir_primo % divisores) == 0) {
        contador_primo++;
      }
    }
    if (contador_primo > 2) {
      console.log(`${imprimir_primo} no es primo`);
      imprimir_primo++;
    } else {
      console.log(`${imprimir_primo}  es primo`);
      $("#contenido").append("<p>" + imprimir_primo + "</p>");
      imprimir_primo++;
    }
  }
}
