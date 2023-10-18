const botonJugador1 = document.querySelector("#boton1");

const botonJugador2 = document.querySelector("#boton2");

// botonJugador1.addEventListener('click', mover("1"));
// botonJugador2.addEventListener('click', mover("2"));

botonJugador1.addEventListener('click', () => mover("1"));
botonJugador2.addEventListener('click', () => mover("2"));


const fichaj1 = `<div id="ficha1" class="ficha jugador1"></div>`
const fichaj2 = `<div id="ficha2" class="ficha jugador2"></div>`

let posicion = 1;
let posicion2 = 1;

function mover(jugador){
    let num = Math.random();
    num=num*6;
    num=Math.ceil(num);
    console.log(num);
    console.log("jugador",jugador)
    if(jugador=="1"){
        let posicionAnterior=posicion;
        posicion=posicion+num;
        if(posicion>20){
            let resto=posicion-20;
            posicion=20-resto; 
        }
        if(posicion==posicion2){
            document.querySelector(`#casillas2 #c${posicion2}`).innerHTML=` `;
            document.querySelector(`#casillas2 #c1`).innerHTML=fichaj2;
            posicion2=1;
        }
        document.querySelector(`#casillas1 #c${posicionAnterior}`).innerHTML=` `;
        document.querySelector(`#casillas1 #c${posicion}`).innerHTML=fichaj1;
    }else{
        let posicionAnterior2=posicion2;
        posicion2=posicion2+num;
        if(posicion2>20){
            let resto2=posicion2-20;
            posicion2=20-resto2; 
        }
        if(posicion2==posicion){
            document.querySelector(`#casillas1 #c${posicion}`).innerHTML=` `;
            document.querySelector(`#casillas1 #c1`).innerHTML=fichaj1;
            posicion=1;
        }
        document.querySelector(`#casillas2 #c${posicionAnterior2}`).innerHTML=` `;
        document.querySelector(`#casillas2 #c${posicion2}`).innerHTML=fichaj2;
    }
    
    // console.log(posicion)
    // console.log(posicion2)
    
    

    

    if (posicion == 20) {
        console.log("Has ganado");
        confirm("HAS GANADO JUGADOR ROJO!!!! Jugar de nuevo?");
        if (confirm) {
            document.querySelector(`#casillas1 #c${posicion}`).innerHTML = " ";
            document.querySelector(`#casillas2 #c${posicion2}`).innerHTML = " ";
            document.querySelector(`#casillas1 #c1`).innerHTML = fichaj1;
            document.querySelector(`#casillas2 #c1`).innerHTML = fichaj2;
            posicion = 1;
            posicion2 = 1;
        }
    }

    if (posicion2 == 20) {
        console.log("Has ganado");
        confirm("HAS GANADO JUGADOR AMARILLO!!!! Jugar de nuevo?");
        if (confirm) {
            document.querySelector(`#casillas1 #c${posicion}`).innerHTML = " ";
            document.querySelector(`#casillas2 #c${posicion2}`).innerHTML = " ";
            document.querySelector(`#casillas1 #c1`).innerHTML = fichaj1;
            document.querySelector(`#casillas2 #c1`).innerHTML = fichaj2;
            posicion = 1;
            posicion2 = 1;
        }
    }

}


/*
let posicion = 1;

function mover(event){
    let num = Math.random();
    num=num*6;
    num=Math.ceil(num);
    console.log(num);
    let posicionAnterior=posicion;
    posicion2=posicion2+num;
    console.log(posicion)
    
    if(posicion>20){
        let resto=posicion-20;
        posicion=20-resto; 
    }

    if(posicion==20){
        console.log("Has ganado")
        // document.querySelector(`#ganador`).innerHTML=`<h1>HAS GANADO</h1>`;
        confirm("HAS GANADO!!!!")
        if(confirm){
            document.querySelector(`#casillas1 #c${posicionAnterior}`).innerHTML=` `;
            posicion=1;
        }
        

    }

    document.querySelector(`#casillas1 #c${posicionAnterior}`).innerHTML=` `;
    document.querySelector(`#casillas1 #c${posicion}`).innerHTML=fichaj1;


}
*/

/*
let posicion2 = 1;

function mover2(event){
    let num = Math.random();
    num=num*6;
    num=Math.ceil(num);
    console.log(num);
    let posicionAnterior2=posicion2;
    posicion2=posicion2+num;
    console.log(posicion)
    
    if(posicion2>20){
        let resto=posicion2-20;
        posicion2=20-resto; 
    }

    if(posicion2==20){
        console.log("Has ganado")
        // document.querySelector(`#ganador`).innerHTML=`<h1>HAS GANADO</h1>`;
        confirm("HAS GANADO!!!!")
        if(confirm){
            document.querySelector(`#casillas2 #c${posicionAnterior2}`).innerHTML=` `;
            posicion2=1;
        }
        

    }

    document.querySelector(`#casillas2 #c${posicionAnterior2}`).innerHTML=` `;
    document.querySelector(`#casillas2 #c${posicion2}`).innerHTML=fichaj2;


}
*/

