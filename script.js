document.addEventListener("DOMContentLoaded", function () {
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
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log('Registro exitoso:', data);
      })
      .catch(error => {
        console.log('Error al registrar:', error);
      });
  });
});