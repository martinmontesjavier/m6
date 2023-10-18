console.log("Hola")


botonAleatorio.addEventListener('click',generarNumAleatorio)
botonContraseña.addEventListener('click',generarContraseña)
botonEmoticonos.addEventListener('click',generarEmoticonoAleatorio)
mayusculas.addEventListener('click',hacerMayusculas)
minusculas.addEventListener('click',hacerMinusculas)
botonBuscar.addEventListener('click', buscar)
botonBuscar.addEventListener('click', resumen)
convertirNombre.addEventListener('click',convertirN)
convertirFecha.addEventListener('click',convertirF)
// Todo esto son los listeners para ejecutar las funciones con click



/*EJERCICIO 1*/
function generarNumAleatorio(event){
    event.preventDefault();
    let num1 = document.querySelector("#num1").value;
    let num2 = document.querySelector("#num2").value;
    let aleatorio = document.querySelector("#numeroAleatorio");
    // guardo en variables los numeros y el div donde se pondra el número aleatorio


    console.log(num1)
    console.log(num2)
    // para ver si funciona




    let random = 0;
    if(num1<num2){
        while(random<num1){
            random = Math.floor(Math.random()*num2);
        }
        console.log(random);
        aleatorio.innerHTML=random;
    }else{
        while(random<num2){
            random = Math.floor(Math.random()*num1);
        }
        console.log(random)
        aleatorio.innerHTML=random;
    }
    // compara los numeros y se queda con el más grande de los dos, una vez hecho esto los pone en un bucle saacando números aleatorios hasta que el que salga sea más grande que el numero más pequeño y se inserta

}


/*EJERCICIO 2*/
function hacerMayusculas (event){

    const texto=document.querySelector("#texto").value
    // coge el texto en una variable

    let contadorPalabras = texto.split(" ").length
    // se hace split de los espacios vacios para saber número de palabras del texto

    document.querySelector("#contadorPalabras").innerHTML= `El texto contiene <strong>${contadorPalabras}</strong> palabras`
    // inserta el número de palabras que hay

    const textoMayusculas=texto.toUpperCase()
    // convierte el texto en mayusculas

    document.querySelector("#texto").value = textoMayusculas
    // inserta el texto en mayusculas
}

function hacerMinusculas (event){

    const texto=document.querySelector("#texto").value
    // coge el texto en una variable
    let contadorPalabras = texto.split(" ").length
    // se hace split de los espacios vacios para saber número de palabras del texto
    document.querySelector("#contadorPalabras").innerHTML= `El texto contiene <strong>${contadorPalabras}</strong> palabras`
    // inserta el número de palabras que hay

    const textoMinusculas=texto.toLowerCase()
    // convierte el texto en minusculas
    document.querySelector("#texto").value = textoMinusculas
    // inserta el texto en minusculas
}



function buscar (event){

    const texto=document.querySelector("#texto").value
    document.querySelector("#texto2").innerHTML = texto
    // coloca el texto a analizar en el texto que hay debajo del buscador

    const texto2 = document.querySelector("#texto2").innerHTML
    // guardo el texto de debajo del buscador en una constante
    let textosSinModificar = texto2.replaceAll(`<span class="bg-primary text-light">`, `<span>`)
    // guardo una variable de texto sin modificar para que se borren las marcas azules de la anterior busqueda en caso de hacer uno nuevo

    const palabra = document.querySelector("#palabraBuscador").value
    // se guarda la palabra a buscar

    
    texto2.matchAll(palabra)
    // busca la palabra

    let nuevoTexto = textosSinModificar
    // creo una nueva variable donde se pondran las marcas
    nuevoTexto = texto2.replaceAll(`${palabra}`, `<span class="bg-primary text-light">${palabra}</span>`)
    // busca y cambia todas las palabras por un span marcado con la palabra en su interior 


    document.querySelector("#texto2").innerHTML=nuevoTexto;
    // inserta el texto marcado

    const contadorSPAN = document.querySelectorAll("#texto2 span") 
    let contador = 0;
    contadorSPAN.forEach(span => {
        contador++;
      });
    numCoincidencias.innerHTML=contador

    // se guardan los span que hay dentro del texto para luego ponerlo en un bucle y contarlos todos para poner el numero de coincidencias
}

function resumen (event){

    document.querySelector("#resumen").innerHTML=document.querySelector("#texto").value
    let resumen = document.querySelector("#resumen").innerHTML
    // coloca el texto donde toca y se guarda en una variable

    
    if(resumen.split(" ").length<11){
        document.querySelector("#resumen").innerHTML = resumen 
        // comprueba el numero de palabras, si es menos de 11 no hace nada
    }else{
        let array = resumen.split(" ")
        let resumenNuevo=``
        for(let i=0;i<10;i++){
            resumenNuevo+=`${array[i]} `
        }
        resumenNuevo+=`...`
        document.querySelector("#resumen").innerHTML=resumenNuevo
        // si el numero de palabras es mayor de 10, se guarda el split en un array y se crea un bucle que van guardando las palabras en un nuevo array, hasta un maximo de 10
    }

    
}



/*EJERCICIO 3*/

function convertirN(event){
    const nombre = document.querySelector("#nombreEjercicio3").value
    // guardo nombre

    let nuevoNombre = nombre.replaceAll(" ", "-")
    // cambio los espacios vacios por -
    document.querySelector("#nombreConvertido").innerHTML=nuevoNombre
    // inserto el nuevo nombre
    
}

function convertirF(event){
    const fecha = document.querySelector("#fechaEjercicio3").value
    // guardo fecha
    let nuevaFecha = fecha.replaceAll("/","-")
    // cambio los / por -
    document.querySelector("#fechaConvertida").innerHTML=nuevaFecha
    // inserto la nueva fecha
    
}




/*EJERCICIO 4*/
function generarContraseña(event) {
    const letras = 'abcdefghijklmnopqrstuvwxyz';
    // guardo el abecedario entero en una constante
    let cadenaAleatoria = '';
    // cadena donde se guardara la contraseña

    for (let i = 0; i < 10; i++) {
      const aleatorio = Math.floor(Math.random() * letras.length);
      // guarda una letra aleatoria, haciedno un redonde de la obtencion de un random por la longitud de la constante letras
      const letraAleatoria = letras.charAt(aleatorio);
      // se queda con la letra que diga que hay en la posicion del random generador anteriormente
      cadenaAleatoria += letraAleatoria;
      // coloca la letra en la variable
    }

    document.querySelector("#contra").value=cadenaAleatoria
    // coloca la contraseña

}

/*EJERCICIO 5*/

function generarEmoticonoAleatorio(event) {

    const emoticonos = ["😀", "😂", "😎", "😍", "🥳", "😜", "😊", "🤖", "🐱", "🐶"];
    // se guarda un array con emoticonos

    const emoticonoAleatorio = Math.floor(Math.random() * emoticonos.length);
    // se obtiene un numero aleatorio redondeado 

    document.querySelector("#contenedorEmoticonos").innerHTML = emoticonos[emoticonoAleatorio];
    // se muestra el icono situado en la posicion del numero aleatorio generado anteriormente

}

