
// 1.1
fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
        console.log(json)
        let html = ``
        for(let i=0; i<5; i++){
            html += `
            <tr>
                <th scope="row"><button data-id="${json[i].id}" class="botonInfo">${json[i].id}</button></th>
                <td>${json[i].name}</td>
                <td>${json[i].username}</td>
                <td>${json[i].email}</td>
            </tr>
            `
        }
        document.querySelector('tbody').innerHTML = html

 // 1.2       
        document.querySelectorAll('.botonInfo').forEach(btn => {
          btn.addEventListener('click', (event) => {
            const userId = event.target.getAttribute('data-id');
            const selectedUser = json.find(user => user.id == userId);
    
            let html2 = `<div class="card">
              <div class="card-body">
                <h5 class="card-title">${selectedUser.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Datos</h6>
                <p><strong>Username: </strong> ${selectedUser.username}</p>
                <p><strong>Email: </strong> ${selectedUser.email}</p>
                <a href="#" class="card-link">Página web</a>
              </div>
            </div>`
    
            document.querySelector('.card').innerHTML = html2;
          });
        });
      });
    

//1.3
fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        console.log(json)
      })

// 1.4  

fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(json => {
        console.log(json)
      })












    //   function inyectarPokemon(url){
    //     // Codigo para añadir elementos a un div
    //     const divPokemons = document.querySelector('#pokemons');
    //     //Creamos elemento nuevo
    //     const imagen = document.createElement("div");
    //     // Le inyectamos la imagen
    //     imagen.innerHTML = `<img src="${url}">`
    
    //     // Añadimos en el div divPokemons el div creado con la imagen
    //     divPokemons.appendChild(imagen)
    // }

    //   for(let i=0;i<5;i++){
    //     .then(responseJSON =>{
            
    //     })
    //   }