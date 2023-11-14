class Product {
    constructor(url, title, price, description, category) {
        this.url = url;
        this.title = title;
        this.price = price;
        this.description = description;
        this.category = category;
    }
}

const listaCarrito = document.querySelectorAll('.lista-carrito');
const card = document.querySelector('.card');

fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {
        data.forEach(producto => {

            card.innerHTML += `
            <div class="row">
        <div class="info-card">
          <h4>${producto.title}</h4>
          <img src="${producto.image}" class="imagen-curso">
          <p class="precio">${producto.price}$<span class="u-pull-right ">${producto.price}$</span></p>
          <button type="button" class="btnAceptar" onclick="agregarCursoAlCarrito">Aceptar</button>
        </div>
        </div>`;
            // Agregar la tarjeta al DOM
            document.body.appendChild(card);
        });
    });
function agregarCursoAlCarrito(e) {
    e.preventDefault();
    const curso = e.target.parentElement.parentElement;
    obtenerDatosCurso(curso);
}
function obtenerDatosCurso(curso) {
    const cursoInfo = {
        imagen: curso.querySelector('.imagen-curso').src,
        nombre: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('.agregar-carrito').getAttribute('data-id')
    };
    agregarCursoAlHTML(cursoInfo);
}

function agregarCursoAlHTML(curso) {
    const row = document.createElement('tr');
    console.log(curso);
    row.innerHTML = `
          <td>
            <img src="${curso.imagen}" width="100">
          </td>
          <td>${curso.nombre}</td>
          <td>${curso.precio}</td>
          <td>
            <input type="number" min="1" value="1">
          </td>
          <td>
            <a class="borrar-curso" data-id="${curso.id}">X</a>
          </td>
        `;
    listaCarrito.appendChild(row);
}
// const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

// vaciarCarritoBtn.addEventListener('click', vaciarCarrito);

// listaCarrito.addEventListener('click', eliminarCurso)


function vaciarCarrito() {
    while (listaCarrito.firstChild) {
        listaCarrito.removeChild(listaCarrito.firstChild);
    }
}

function eliminarCurso(e) {
    if (e.target.classList.contains('borrar-curso')) {
        e.target.parentElement.parentElement.remove();
    }
}
