// console.log('Hola desde main.js')

// capturamos el boton, añadimos el evento al hacer click y llamamos a la funcion enviar
const boton = document.querySelector("#boton");

// const vectorPrincipal = []

boton.addEventListener("click", enviar);

boton.addEventListener("click", empujar);
boton.addEventListener("click", pintarTabla);



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
  let valorImagen=`<img src="${valorUrl}" alt="imagen">`
  imagen.innerHTML= valorImagen

  // creamos una contante que capture el id
  const nombreFinal = document.querySelector("#nombreCompleto")
  // insertamos el contenido que queramos con .innerhtml
  nombreFinal.innerHTML=`<span>${nombreCompleto}</span>`

  const dniResultado = document.querySelector("#dniResultado")
  dniResultado.innerHTML=`<span>${valorDni}</span>`
  //const valorDniresultado = 

  //EJERCICIO 3 v.Gerard (hay que poner #divTabla en el tbody)
  /*
  const vector = {
    valorNombre,
    valorUrl,
    valorApellido1,
    valorDni
  }

  vectorPrincipal.push(vector)
  let tabla=``
  vectorPrincipal.forEach((element,index) => {
    tabla+=`
    <tr>
    <td>${index+1}</td>
    <td><img widht="30" src="${element.valorUrl}" alt="imagen"></td>
    <td>${element.valorNombre}</td>
    <td>${element.valorApellido1}</td>
    <td>${element.valorDni}</td>
    </tr>`
  });

  document.querySelector("#divTabla").innerHTML=tabla*/

}


  //EJERCICIO 3 v.mia (hay que poner #divTabla en el div general)

const arrayPersonas = [
  {
    "id": "1",
    "imagen": "https://i0.wp.com/www.diarlu.com/wp-content/uploads/2019/09/rostro-mujer-adulta.jpg?w=500&ssl=1",
    "nombre": "Elena",
    "apellido": "Vegante",
    "dni": "212121121A"
  }
  ,
  {
    "id": "1",
    "imagen": "https://i0.wp.com/www.diarlu.com/wp-content/uploads/2019/09/hombre-maduro-guapo.jpg?w=500&ssl=1",
    "nombre": "Perico",
    "apellido": "Mepiedras",
    "dni": "123456789A"
  }
]


function empujar (event){
  const valorNombre = nombre.value
  const valorApellido1 = apellido1.value
  const valorApellido2 = apellido2.value
  const valorDni = dni.value
  const valorUrl = url.value

  const vector = (
    {
    // "id": "1",
    "imagen": valorUrl,
    "nombre": valorNombre,
    "apellido": valorApellido1,
    "dni": valorDni
  }
  )


  event.preventDefault()
  // arrayPersonas.push("1", valorUrl, valorNombre, valorApellido1, valorDni)
  arrayPersonas.push(vector)
  console.log(arrayPersonas)
}




function pintarTabla(event){
  event.preventDefault()
    let tabla=`
    <table class="table">
    <tr>
      <th>ID</th>
      <th>Imagen</th>
      <th>Nombre</th>
      <th>Apellidos</th>
      <th>Dni</th>
    </tr>  
    `
    arrayPersonas.forEach((element,index) => {
      tabla+=`
      <tr>
      <td>${index+1}</td>
      <td><img src="${element.valorUrl}" alt="imagen"></td>
      <td>${element.valorNombre}</td>
      <td>${element.valorApellido1}</td>
      <td>${element.valorDni}</td>
      </tr>`
      console.log(element.nombre)
    });

    tabla+=`</table>`
    document.querySelector("#divTabla").innerHTML=tabla

}
