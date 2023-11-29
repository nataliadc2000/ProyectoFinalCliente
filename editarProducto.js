    // Obtén la información pasada como parámetro en la URL
    // var id = getUrlParameter('id');
    var id = window.location.search.substring(1).split("=")[1];
    // Si no hay parámetro, redirige al usuario a la página principal
    if (!id) {
        alert("El id no esta disponible en este momento");
    } else {
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res=>res.json())
        .then(json => {
                var card = document.createElement("div");
                card.classList.add("card");
                card.innerHTML =`
                <div>
                    <div>
    <img src="${json.image}" alt="">
    <p><span>${json.price}</span>$</p>
  </div>
  <p class="title">${json.title}</p>
  <a href="productos.html" class="btn-back">Volver</a>
                `;
                document.body.appendChild(card);
            // console.log(json);
            const form = document.createElement("form");
form.innerHTML = `
<input type="text" name="image" id="image" value="${element.image}">
<input type="text" name="price" id="price" value="${element.price}">
<input type="text" name="title" id="title" value="${element.title}">
<input type="button" value="Edit" onclick="modificarDatos()">
`;
document.body.appendChild(form);

        });
    }
const array = JSON.parse(localStorage.getItem("products"));
const element = array[id];

function modificarDatos(){
    
    // Obtener los valores del formulario
const image = document.getElementById("image").value;
const price = document.getElementById("price").value;
const title = document.getElementById("title").value;
// Obtener los datos del localstorage
element.image= image;
element.price = price;
element.title =title;
array.push(element);

// Guardar los datos actualizados en el localstorage
localStorage.setItem("products", JSON.stringify(array));

}