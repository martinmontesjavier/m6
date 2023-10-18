// console.log('Hola desde main.js')

// capturamos el boton, añadimos el evento al hacer click y llamamos a la funcion enviar
const boton = document.querySelector("#boton");
boton.addEventListener("click", enviar);

// creamos la funcion enviar
function enviar(event) {
  // para evitar que refresque la página
  event.preventDefault();

  // capturaramos la informacion
  const nombre = document.querySelector("#nombre");
  const apellido1 = document.querySelector("#apellido1");
  const apellido2 = document.querySelector("#apellido2");
  const dni = document.querySelector("#dni");
  const url = document.querySelector("#url");

  // capturamos el valor de cada constante y la colocamos en otra constante nueva
  const valorNombre = nombre.value
  const valorApellido1 = apellido1.value
  const valorApellido2 = apellido2.value

  const valorDni = dni.value
  console.log(valorDni)

  const valorUrl = url.value
  console.log(valorUrl)

  // creamos la constante con el nombre completo (la suma de los valores)
  const nombreCompleto = valorNombre + " " + valorApellido1 + " " + valorApellido2
  console.log(nombreCompleto)


  const imagen = document.querySelector("#imagen")
  imagen.innerHTML=`<img src="${valorUrl}" alt="imagen">`

  // creamos una contante que capture el id
  const nombreFinal = document.querySelector("#nombreCompleto")
  // insertamos el contenido que queramos con .innerhtml
  nombreFinal.innerHTML=`<span>${nombreCompleto}</span>`

  const dniResultado = document.querySelector("#dniResultado")
  dniResultado.innerHTML=`<span>${valorDni}</span>`
  //const valorDniresultado = 


}
