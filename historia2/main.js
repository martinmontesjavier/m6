
//Ejercicio 1
const botonNick = document.querySelector('#botonModificarNick');
botonNick.addEventListener('click', modificarNick);
  
    function modificarNick() {
    const valorNick = document.querySelector('#nickInput')
    const resultadoNick = document.querySelector('#resultadoNick')

    //coger valor nick quitando los espacios
    let nick = valorNick.value.trim()

    // Eliminar espacios(en caso de haber al principio o final), sustituir los espacios por guiones bajos y convertir todo a mayúsculas
    nick = nick.trim().replaceAll(" ", '_').toUpperCase()
  
    resultadoNick.innerHTML = nick
}




//Ejercicio 2
const botonFecha = document.querySelector('#botonModificarFecha');
botonFecha.addEventListener('click', modificaFecha);
const fecha = document.querySelector('#fecha')
const resultadoFecha = document.querySelector('#resultadoFecha')

    function modificaFecha(){
        const x=fecha.value
        const miFecha = new Date(x)
        console.log(miFecha)
        const nombresMeses = [
          'gener', 'febrer', 'març', 'abril', 'maig', 'juny',
          'juliol', 'agost', 'setembre', 'octubre', 'novembre', 'desembre'
        ]
        const dia =miFecha.getDate()
        const mes =nombresMeses[miFecha.getMonth()]
        const año =miFecha.getFullYear()
        const hores = String(miFecha.getHours()).padStart(2, '0');
        const minuts = String(miFecha.getMinutes()).padStart(2, '0');
        const segons = String(miFecha.getSeconds()).padStart(2, '0');

        suma= dia + " " + mes + " " + año + "" + " "+ hores+":"+minuts+":"+segons
        resultadoFecha.innerHTML=suma
    }


//Ejercicio 2.2
const botonFecha2 = document.querySelector('#botonModificarFecha2');
botonFecha2.addEventListener('click', modificaFecha2);
const fecha2 = document.querySelector('#fecha2')
function modificaFecha2(x) {
  const resultadoFecha2 = document.querySelector('#resultadoFecha2')
  x=fecha2.value
  const miFecha = new Date(x)
  // Obté els components de la data
  const any = miFecha.getFullYear().toString().slice(-2); // Obtenim els últims 2 dígits de l'any
  const mes = (miFecha.getMonth() + 1).toString().padStart(2, '0'); // El mes comença des de 0
  const dia = miFecha.getDate().toString().padStart(2, '0');
  const hores = miFecha.getHours().toString().padStart(2, '0');
  const minuts = miFecha.getMinutes().toString().padStart(2, '0');
  const segons = miFecha.getSeconds().toString().padStart(2, '0');

  const suma = any+"/"+mes+"/"+dia+"T"+hores+":"+minuts+ ":"+segons

  resultadoFecha2.innerHTML=suma
}


// Ejercicio 3
const botonDias = document.querySelector('#botonDias');
botonDias.addEventListener('click', contarDias);
const dias = document.querySelector('#dias');

function contarDias(x) {
  x=dias.value
  const resultadoDias = document.querySelector('#resultadoDias');
  const fechaIngresada = x;

  const dataIngresada = new Date(fechaIngresada);
  const dataActual = new Date();

  // Calculamos la diferencia en milisegundos entre las dos fechas
  const diferenciaEnMilisegundos = dataActual - dataIngresada;

  // Convertimos la diferencia en días
  const diferenciaEnDias = Math.floor(diferenciaEnMilisegundos / (1000 * 60 * 60 * 24));

  resultadoDias.innerHTML = diferenciaEnDias;
}


// Ejercicio 4

var ls = {
    setDades: function(dades) {
      // Convierte el objeto 'dades' a una cadena JSON
      var dadesString = JSON.stringify(dades);
      
      // Almacena la cadena JSON en el localStorage con la clave 'tetris_dades'
      localStorage.setItem('tetris_dades', dadesString);
      
      return true;
    },
    
    getDades: function() {
      // Obtiene el contenido de 'tetris_dades' en el localStorage
      var dadesString = localStorage.getItem('tetris_dades');
      
      // Si no hay información en el localStorage, retorna un objeto vacío
      if (!dadesString) {
        return {};
      }
      
      // Parsea la cadena JSON para obtener el objeto 'dades' original
      var dades = JSON.parse(dadesString);
      
      return dades;
    }
  };
  
  // Ejemplo de uso:
  var dadesEjemplo = {
    partidas: [
      {	
        avatar: 'imagen1.png',
        nick: 'MANOLO',
        puntuacion: 124561,
        fecha: '23/12/05T12:12:00'
      },
      {
        avatar: 'imagen2.png',
        nick: 'PEDRA',
        puntuacion: 1561,
        fecha: '23/09/05T13:12:00'
      }
    ],
    ranking: [
      {	
        avatar: 'imagen1.png',
        nick: 'MANOLO',
        puntuacion: 124561
      },
      {
        avatar: 'imagen2.png',
        nick: 'PEDRA',
        puntuacion: 1561
      }
    ]
  };
  
  // Guardar datos en el localStorage
  ls.setDades(dadesEjemplo);
  
  // Recuperar datos del localStorage
  var datosRecuperados = ls.getDades();
  
  console.log(datosRecuperados);




  //Ejercicio 5
  function registraPartida(partida) {
    // Obtenemos los datos del localStorage
    var dadesLocalStorage = ls.getDades(); // Suponiendo que 'ls' es el objeto con los métodos setDades y getDades
  
    // Verificamos si ya existe el array 'partidas' en los datos del localStorage
    if (!dadesLocalStorage.partidas) {
      dadesLocalStorage.partidas = [];
    }
  
    // Agregamos la partida al array 'partidas'
    dadesLocalStorage.partidas.push(partida);
  
    // Actualizamos los datos en el localStorage
    ls.setDades(dadesLocalStorage); // Suponiendo que 'ls' es el objeto con el método setDades
  }
  
  // Ejemplo de una partida
  var nuevaPartida = {
    avatar: 'imagen4.png',
    nick: 'Javi',
    puntuacion: 1561,
    fecha: '23/09/05T13:12:00'
  };
  
  // Llamamos a la función registraPartida para registrar una nueva partida
  registraPartida(nuevaPartida);
  
  // Comprobamos que el localStorage se ha actualizado correctamente
  var datosRecuperados = ls.getDades(); // Suponiendo que 'ls' es el objeto con el método getDades
  console.log(datosRecuperados);