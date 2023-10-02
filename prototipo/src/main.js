console.log("hola")


// boton = document.querySelector("#boton");

boton.addEventListener('click', pintaRanking);
// guardar.addEventListener('click', pintaDatosPartida);


const partides = [
    {
      avatar: '<img width=50 src="img/avatar1.svg">',
      nick: 'PACO',
      puntos: 150,
      fecha: '2023-09-27'
    },
    {
      avatar: '<img width=50 src="img/avatar2.svg">',
      nick: 'JUAN',
      puntos: 220,
      fecha: '2023-09-28'
    },
    {
        avatar: '<img width=50 src="img/avatar3.svg">',
        nick: 'LOLITO',
        puntos: 2200,
        fecha: '2023-09-28'
      }
];

const datosEjemploPartida = {
    avatar: '<img width=50 src="img/avatar4.svg">',
    nick: 'DIGREFG' ,
    puntos: 100 ,
    fecha:'21 MAYO 2023' 
}
    


    
pintaTabla(partides)
// insertaNuevaPartida(datosEjemploPartida)
pintaDatosPartida(datosEjemploPartida)

function pintaRanking(event){
    event.preventDefault()
    let ranking =`
                <h2 class="text-center text-light">Ranking</h2>
					<table class="table table-dark align-middle">
						<theader>
							<tr class="bg-dark">
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
						</theader>
						<tbody>
							<tr>
								<td class="fs-2">1</td>
								<td><img src="" alt="avatar" /></td>
								<td>ANDER</td>
								<td>1255</td>
							</tr>
							<tr>
								<td class="fs-2">2</td>
								<td><img src="" alt="avatar" /></td>
								<td>ANDER</td>
								<td>1255</td>
							</tr>
							<tr>
								<td class="fs-2">3</td>
								<td><img src="" alt="avatar" /></td>
								<td>ANDER</td>
								<td>1255</td>
							</tr>
						</tbody>
						<tfoot></tfoot>
					</table>
    `
    
    console.log(ranking)

}


function pintaTabla(partides){
    // event.preventDefault()
    let tabla = `
    <h2 class="text-center text-light">Partidas</h2>
				<div class="input-group mb-3">
					<input
						type="text"
						class="form-control"
						placeholder="Buscador"
						aria-label="Buscador"
						aria-describedby="button-addon2"
					/>
					<button
						class="btn btn-outline-secondary"
						type="button"
						id="button-addon2"
					>
						<i class="bi bi-x-lg"></i>
					</button>
				</div>
				<table class="table table-dark">
					<theader>
						<tr>
							<td></td>
							<td>Nick <i class="bi bi-arrow-up-square"></i></td>
							<td>Puntuación <i class="bi bi-arrow-up-square"></i></td>								<td>Fecha <i class="bi bi-arrow-up-square"></i></td>
						</tr>
                    </theader>
					<tbody>`

    partides.forEach(element => {
        tabla+= `
        <tr>
            <td>${element.avatar}</td>
            <td>${element.nick}</td>
            <td>${element.puntos}</td>
            <td>${element.fecha}</td>
        </tr>`
    });
	tabla+=`</tbody>
    <tfoot></tfoot>
    </table>`

    document.querySelector("#partidas").innerHTML=tabla    
    console.log(tabla)
    
}

function insertaNuevaPartida(datosEjemploPartida) {
    console.log("Guardar partida?")
    console.log(datosEjemploPartida)
	partides.push(datosEjemploPartida)
	
	
}

function pintaDatosPartida(partida){
	const mensaje=`Quieres guardar la partida?
	Nick: ${partida.nick}
	Puntuacion: ${partida.puntos}
	Fecha: ${partida.fecha}`

	// confirm (mensaje)
	if (confirm(mensaje)){
		insertaNuevaPartida(partida)
		pintaTabla(partides)
		console.log("Partida guardada")
	}else{
		console.log("No se ha guardado la partida")
	}
	
}

