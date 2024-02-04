import { ModeloPieza } from "./clases";
import { models } from "./models";

export const panel = {
    matriz: [
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],

    pintaPanel() {
      let html = `<div id="juegoPrincipal">`;
    
      for (let fila = 0; fila < panel.matriz.length; fila++) {
        html += `<div class="fila bg-dark d-flex">`;
    
        for (let columna = 0; columna < panel.matriz[fila].length; columna++) {
          if (panel.matriz[fila][columna] == 1) {
            html += `<div class="columna bg-primary">1</div>`;
          } else if (panel.matriz[fila][columna] == 0) {
            html += `<div class="columna bg-dark">0</div>`;
          }
        }
    
        html += `</div>`;
      }
    
      html += `</div>`;
      return html;
    },

    crearNuevaPieza(){
      let x = Math.floor(Math.random() * 8);

      let posicion = Math.floor(Math.random() * (10 - models[x].matriz[0].length));

      if(posicion == 0){
        posicion = posicion+1;
      }
      
      const pieza = new ModeloPieza(x,0,posicion,0)

      console.log(pieza)
      
      return pieza
    },

    nuevaPieza: null,

    insertarPieza(arrayNuevaPieza) {
      const filaInicial = 0;
      const columnaInicial = arrayNuevaPieza.x;
    
      for (let fila = 0; fila < arrayNuevaPieza.altura; fila++) {
        for (let columna = 0; columna < arrayNuevaPieza.longitud; columna++) {
          const filaPanel = filaInicial + fila;
          const columnaPanel = columnaInicial + columna;

          if (arrayNuevaPieza.matriz[fila][columna] == 1) {
            panel.matriz[filaPanel][columnaPanel] = 1;
          }
           
        }
      }
    
      const divJuegoPrincipal = document.querySelector("#panel");
      divJuegoPrincipal.innerHTML = panel.pintaPanel();
    },
    controlTecla(pieza){
      document.addEventListener('keydown', (e)=>{
        switch (tecla) {
          case 'ArrowUp':
            // panel.girar();
            break;
          case 'ArrowDown':
            // panel.bajar();
            break;
          case 'ArrowLeft':
            // panel.moverIzq();
            break;
          case 'ArrowRight':
            // panel.moverDra();
            break;
          default:
            break;
        }
      })
    }
  
}
  