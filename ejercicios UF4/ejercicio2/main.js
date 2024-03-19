console.log('Hola')

const basePokemons = [

]

document.querySelector('#botonMetodo1').addEventListener('click',pokemons)
document.querySelector('#botonMetodo2').addEventListener('click',pokemonsMetodo2)
document.querySelector('#botonMetodo3').addEventListener('click',leerPokemonConPromise)

//METODO 2.1

async function pokemons(){
    const ahora = new Date().getTime()
    let html= ''
    for(let i=1; i<13; i++){
        try{
            
            const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
            const respJSON = await resp.json()
            html += //html
            `
            <div class="col-md-2">
            <div class="card shadow">
                <img src="${respJSON.sprites.front_default}" alt="Bulbasaur">
                <div class="card-body">
                    <h5 class="card-title">${respJSON.name}</h5>
                    <div class="card-text">ID: ${respJSON.id}</div>
                    <div class="card-text">Tipo:${respJSON.types.map(type => type.type.name).join(', ')}</div>
                    <div class="card-text">Peso: ${respJSON.weight}</div>
                    <div class="card-text">Altura: ${respJSON.height}</div>
                    </div>
                </div>
            </div>
            `
            document.querySelector('#contenedorPokemons').innerHTML = ''
            document.querySelector('#contenedorPokemons').innerHTML = html
            document.querySelector('#tiempoMetodo1').innerHTML = new Date().getTime() - ahora 
        }catch(error){
            console.log('Ha ocurrido un error', error)   
        }
    }
    
}



//METODO 2.2
function pokemonsMetodo2() {
    const ahora = new Date().getTime()
    let html= ''
    for(let i=1; i<13; i++){
        fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then(resp => resp.json())
        .then(respJSON =>{
            html += //html
            `
            <div class="col-md-2">
            <div class="card shadow">
                <img src="${respJSON.sprites.front_default}" alt="Bulbasaur">
                <div class="card-body">
                    <h5 class="card-title">${respJSON.name}</h5>
                    <div class="card-text">ID: ${respJSON.id}</div>
                    <div class="card-text">Tipo:${respJSON.types.map(type => type.type.name).join(', ')}</div>
                    <div class="card-text">Peso: ${respJSON.weight}</div>
                    <div class="card-text">Altura: ${respJSON.height}</div>
                    </div>
                </div>
            </div>
            `
            document.querySelector('#contenedorPokemons').innerHTML = ''
            document.querySelector('#contenedorPokemons').innerHTML = html
            document.querySelector('#tiempoMetodo2').innerHTML = new Date().getTime() - ahora 
        })
    }
    
}



//METODO 2.3
async function leerPokemonConPromise(){
    let html = ''
    const ahora = new Date().getTime()
    const arrayPokemons=[]

    // llenamos array con peticiones asyncronas
    for(let i=0;i<12;i++){
      arrayPokemons[i] = fetch(`https:/pokeapi.co/api/v2/pokemon/${i+1}`).then(resp=>resp.json())
    }

    // console.log('Array de pokemons: ',arrayPokemons); //=> array de promesas
    
    // Guardamos en respuestas las promesas una vez se han resuelto TODAS
    const respuestas  =  await Promise.all(arrayPokemons)
    respuestas.forEach(pokemon => {
        html += //html
        `
        <div class="col-md-2">
        <div class="card shadow">
            <img src="${pokemon.sprites.front_default}" alt="Bulbasaur">
            <div class="card-body">
                <h5 class="card-title">${pokemon.name}</h5>
                <div class="card-text">ID: ${pokemon.id}</div>
                <div class="card-text">Tipo:${pokemon.types.map(type => type.type.name).join(', ')}</div>
                <div class="card-text">Peso: ${pokemon.weight}</div>
                <div class="card-text">Altura: ${pokemon.height}</div>
                </div>
            </div>
        </div>
        `
    });
    document.querySelector('#contenedorPokemons').innerHTML = ''
    document.querySelector('#contenedorPokemons').innerHTML = html
    document.querySelector('#tiempoMetodo3').innerHTML = new Date().getTime() - ahora 
}
  

