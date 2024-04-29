
// 1.1
fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
        console.log(json)
        let html = ``
        for(let i=0; i<5; i++){
            html += `
            <tr>
                <th scope="row"><button data-id="${json[i].id}" class="botonInfo fichaUser">${json[i].id}</button></th>
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
    

// 1.3 y 1.4
document.querySelector('tbody').addEventListener('click', (e) => {
  if (e.target.classList.contains('fichaUser')) {
      const userId = e.target.getAttribute('data-id');
      fetch('https://jsonplaceholder.typicode.com/users/' + userId)
          .then(resp => resp.json())
          .then(usuariosJSON => {
              document.querySelector('#nombreUser').innerHTML = usuariosJSON.name;
              document.querySelector('#infor1').innerHTML = usuariosJSON.company.name;
              document.querySelector('#infor2').innerHTML = usuariosJSON.company.catchPhrase;
          });

      fetch('https://jsonplaceholder.typicode.com/posts?userId=' + userId)
          .then(resp => resp.json())
          .then(postsJSON => {
              let postHtml = '';
              postsJSON.slice(0, 5).forEach(post => {
                  postHtml += `<li data-postid="${post.id}" class="list-group-item d-flex justify-content-between align-items-start postUser">
                  <div class="ms-2 me-auto">
                    <div class="fw-bold">${post.title}</div>
                    ${post.body}
                  </div>
                  <span class="badge bg-primary rounded-pill">${postsJSON.length}</span>
                </li>`;
              });
              document.querySelector('#postPublicats').innerHTML = postHtml;
          });
  }
});

document.querySelector('#postPublicats').addEventListener('click', (e) => {
  if (e.target.classList.contains('postUser')) {
      const postId = e.target.getAttribute('data-postid');
      fetch('https://jsonplaceholder.typicode.com/comments?postId=' + postId)
          .then(resp => resp.json())
          .then(commentsJSON => {
              let commentHtml = '';
              commentsJSON.forEach(comment => {
                  commentHtml += `<div class="card mt-2">
                  <div class="card-body">
                    <h5 class="card-title">${comment.name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${comment.email}</h6>
                    <p class="card-text">${comment.body}</p>
                  </div>
                </div>`;
              });
              document.querySelector('#comentarios').innerHTML = commentHtml;
          });
  }
});





