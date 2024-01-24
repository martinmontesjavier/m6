import { panel } from "./panel"

export const juego = {
    template : //html
    `
    <div id="juego" class="">
				<div class="row">
					<!-- Panel izquierda -->
					<div
						class="col-4 d-flex flex-column justify-content-end align-items-center p-5"
					>
						<h4>Nivel: <span>2</span></h4>
						<h4>Tiempo: <span>5:22</span></h4>
						<h4>Lineas: <span>2</span></h4>
						<h4>Puntos: <span>211122</span></h4>
					</div>
					<!-- Panel central -->
					<div class="col-4 d-flex justify-content-center">
						<div id="panel" class="p-5">
							<div class="fila d-flex justify-content-center">
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
							</div>
							<div class="fila d-flex justify-content-center">
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
							</div>
							<div class="fila d-flex justify-content-center">
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
							</div>
							<div class="fila d-flex justify-content-center">
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
							</div>
							<div class="fila d-flex justify-content-center">
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
							</div>
							<div class="fila d-flex justify-content-center">
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
							</div>
							<div class="fila d-flex justify-content-center">
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
							</div>
							<div class="fila d-flex justify-content-center">
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
							</div>
							<div class="fila d-flex justify-content-center">
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
							</div>
							<div class="fila d-flex justify-content-center">
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
							</div>
							<div class="fila d-flex justify-content-center">
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
							</div>
							<div class="fila d-flex justify-content-center">
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
							</div>
							<div class="fila d-flex justify-content-center">
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
							</div>
							<div class="fila d-flex justify-content-center">
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
							</div>
							<div class="fila d-flex justify-content-center">
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
							</div>
							<div class="fila d-flex justify-content-center">
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
							</div>
							<div class="fila d-flex justify-content-center">
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
							</div>
							<div class="fila d-flex justify-content-center">
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
							</div>
							<div class="fila d-flex justify-content-center">
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
							</div>
							<div class="fila d-flex justify-content-center">
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
							</div>
						</div>
					</div>
					<!-- Panel derecha -->
					<div
						class="col-4 d-flex flex-column justify-content-start align-items-center p-5"
					>
						<div id="piezaSiguiente">
							<h4>Pieza siguiente:</h4>
							<div class="piezaSiguiente m-2">
								<div class="fila d-flex justify-content-center">
									<div class="celda bg-primary bg-gradient border-dark">x</div>
									<div class="celda bg-dark border-secondary">x</div>
								</div>
								<div class="fila d-flex justify-content-center">
									<div class="celda bg-primary bg-gradient border-dark">x</div>
									<div class="celda bg-dark border-secondary">x</div>
								</div>
								<div class="fila d-flex justify-content-center">
									<div class="celda bg-primary bg-gradient border-dark">x</div>
									<div class="celda bg-primary bg-gradient border-dark">x</div>
								</div>
							</div>
							<div class="piezaSiguiente m-2">
								<div class="fila d-flex justify-content-center">
									<div class="celda bg-primary bg-gradient border-dark">x</div>
									<div class="celda bg-dark border-secondary">x</div>
								</div>
								<div class="fila d-flex justify-content-center">
									<div class="celda bg-primary bg-gradient border-dark">x</div>
									<div class="celda bg-dark border-secondary">x</div>
								</div>
								<div class="fila d-flex justify-content-center">
									<div class="celda bg-primary bg-gradient border-dark">x</div>
									<div class="celda bg-primary bg-gradient border-dark">x</div>
								</div>
							</div>
							<div class="piezaSiguiente m-2">
								<div class="fila d-flex justify-content-center">
									<div class="celda bg-primary bg-gradient border-dark">x</div>
									<div class="celda bg-dark border-secondary">x</div>
								</div>
								<div class="fila d-flex justify-content-center">
									<div class="celda bg-primary bg-gradient border-dark">x</div>
									<div class="celda bg-dark border-secondary">x</div>
								</div>
								<div class="fila d-flex justify-content-center">
									<div class="celda bg-primary bg-gradient border-dark">x</div>
									<div class="celda bg-primary bg-gradient border-dark">x</div>
								</div>
							</div>
						</div>
						<hr />
						<div id="piezaGuardada">
							<h4>Pieza guardada:</h4>
							<div class="piezaGuardada">
								<div class="piezaSiguiente m-2">
									<div class="fila d-flex justify-content-center">
										<div class="celda bg-warning bg-gradient border-dark">x</div>
										<div class="celda bg-warning border-secondary">x</div>
									</div>
									<div class="fila d-flex justify-content-center">
										<div class="celda bg-warning bg-gradient border-dark">x</div>
										<div class="celda bg-warning border-secondary">x</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
    `,
    script:()=>{
		const models = [
			{
				nombre: "Palo",
				color: "Azul",
				matriz: [
					[
						[1],
						[1],
						[1],
						[1]
					],
					[
						[1,1,1,1]
					],
					[
						[1],
						[1],
						[1],
						[1]
					],
					[
						[1,1,1,1]
					]
				]
			},
			{
				nombre: "L",
				color: "Morado",
				matriz: [
					[
						[1,0],
						[1,0],
						[1,0],
						[1,1]
					],
					[
						[1,1,1,1],
						[1,0,0,0]
					],
					[
						[1,1],
						[0,1],
						[0,1],
						[0,1]
					],
					[
						[0,0,0,1],
						[1,1,1,1]
					]
				]
			},
			{
				nombre: "L invertida",
				color: "Celeste",
				matriz: [
					[
						[0,1],
						[0,1],
						[0,1],
						[1,1]
					],
					[
						[1,0,0,0],
						[1,1,1,1]
					],
					[
						[1,1],
						[1,0],
						[1,0],
						[1,0]
					],
					[
						[1,1,1,1],
						[0,0,0,1]
					]
				]
			},
			{
				nombre: "Z",
				color: "Verde",
				matriz: [
					[
						[1,1,0],
						[0,1,1]
					],
					[
						[0,1],
						[1,1],
						[1,0]
					],
					[
						[1,1,0],
						[0,1,1]
					],
					[
						[0,1],
						[1,1],
						[1,0]
					]
				]
			},
			{
				nombre: "Z invertida",
				color: "Rojo",
				matriz: [
					[
						[0,1,1],
						[1,1,0]
					],
					[
						[1,0],
						[1,1],
						[0,1]
					],
					[
						[0,1,1],
						[1,1,0]
					],
					[
						[1,0],
						[1,1],
						[0,1]
					]
				]
			},
			{
				nombre: "Cuadrado",
				color: "Amarillo",
				matriz: [
					[
						[1,1],
						[1,1]
					],
					[
						[1,1],
						[1,1]
					],
					[
						[1,1],
						[1,1]
					],
					[
						[1,1],
						[1,1]
					]
				]
			},
			{
				nombre: "T",
				color: "Naranja",
				matriz: [
					[
						[1,1,1],
						[0,1,0]
					],
					[
						[0,1],
						[1,1],
						[0,1]
					],
					[
						[0,1,0],
						[1,1,1]
					],
					[
						[1,0],
						[1,1],
						[1,0]
					]
				]
			}
		]

		document.querySelector("#panel")
    }
}