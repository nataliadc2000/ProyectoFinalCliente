

function modificarDatos(){
    
    // Obtener los valores del formulario
const email = document.getElementById("email").value;
const username = document.getElementById("username").value;
const password = document.getElementById("password").value;
const firstname = document.getElementById("firstname").value;
const lastname = document.getElementById("lastname").value;
const city = document.getElementById("city").value;
const street = document.getElementById("street").value;
const number = document.getElementById("number").value;
const zipcode = document.getElementById("zipcode").value;
const phone = document.getElementById("phone").value;

// Obtener los datos del localstorage
const userData = JSON.parse(localStorage.getItem("userData"));

// Actualizar los valores del usuario
userData.email = email;
userData.username = username;
userData.password = password;
userData.firstname = firstname;
userData.lastname = lastname;
userData.city = city;
userData.street = street;
userData.number = number;
userData.zipcode = zipcode;
userData.phone = phone;

// Guardar los datos actualizados en el localstorage
localStorage.setItem("userData", JSON.stringify(userData));

}

const arrayDeArrays = JSON.parse(localStorage.getItem('arrayDeArrays'));

// const divUltimosCarritos = document.getElementById("ultimosCarritos");


// Obtén el div
const divUltimosCarritos = document.getElementById("ultimosCarritos");

// Recorre cada array y crea elementos para mostrar los datos
arrayDeArrays.forEach((array, index) => {
  // Crear un elemento de título
  const titulo = document.createElement("h2");
  divUltimosCarritos.appendChild(titulo);
  
  // Crear un elemento de lista
  const lista = document.createElement("ul");
  
  // Recorre cada elemento del array y crea elementos de lista
  array.forEach((elemento) => {
      const itemLista = document.createElement("li");
      titulo.textContent = `Carrito ${index + 1}`;
    itemLista.textContent = elemento;
    lista.appendChild(itemLista);
  });

  // Agregar la lista al div
  divUltimosCarritos.appendChild(lista);
});
