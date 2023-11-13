


//creacion de la funcion en la base de datos de los usuarios que se van a introducir en la api
document.getElementById("btnResgitrar").addEventListener("click", function () {

  const data = {
    email: document.getElementById("email").value,
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
    name: {
      firstname: document.getElementById("firstname").value,
      lastname: document.getElementById("lastname").value
    },
    address: {
      city: document.getElementById("city").value,
      street: document.getElementById("street").value,
      number: document.getElementById("number").value,
      zipcode: document.getElementById("zipcode").value,
      geolocation: {
        lat: document.getElementById("lat").value,
        long: document.getElementById("long").value
      }
    },
    phone: document.getElementById("phone").value
  };
  fetch('https://fakestoreapi.com/users', {
    method: "POST",
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(json => { console.log(json); window.location.href = "login.html" });
});
