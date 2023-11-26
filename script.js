// document.addEventListener("DOMContentLoaded", function () {
//   document.getElementById("btnResgitrar").addEventListener("click", function () {
//     const data = {
//       email: document.getElementById("email").value,
//       username: document.getElementById("username").value,
//       password: document.getElementById("password").value,
//       name: {
//         firstname: document.getElementById("firstname").value,
//         lastname: document.getElementById("lastname").value
//       },
//       address: {
//         city: document.getElementById("city").value,
//         street: document.getElementById("street").value,
//         number: document.getElementById("number").value,
//         zipcode: document.getElementById("zipcode").value,
//         geolocation: {
//           lat: document.getElementById("lat").value,
//           long: document.getElementById("long").value
//         }
//       },
//       phone: document.getElementById("phone").value
//     };

//     fetch('https://fakestoreapi.com/users', {
//       method: "POST",
//       body: JSON.stringify(data),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     })
//       .then(response => response.json())
//       .then(data => {
//         console.log('Registro exitoso:', data);
//         localStorage.setItem('username', data.username);
//         localStorage.setItem('password', data.password);
//       })
//       .catch(error => {
//         console.log('Error al registrar:', error);
//       });
//   });
// });
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("btnResgitrar").addEventListener("click", function () {
  // .preventDefault(); // Evita que el formulario se envíe automáticamente
  
  // Captura los valores de los campos del formulario
  var email = document.getElementById("email").value;
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var firstname = document.getElementById("firstname").value;
  var lastname = document.getElementById("lastname").value;
  var city = document.getElementById("city").value;
  var street = document.getElementById("street").value;
  var number = document.getElementById("number").value;
  var zipcode = document.getElementById("zipcode").value;
  var lat = document.getElementById("lat").value;
  var long = document.getElementById("long").value;
  var phone = document.getElementById("phone").value;
  
  // Crea un objeto con los datos capturados
  var userData = {
    email: email,
    username: username,
    password: password,
    firstname: firstname,
    lastname: lastname,
    city: city,
    street: street,
    number: number,
    zipcode: zipcode,
    lat: lat,
    long: long,
    phone: phone
  };
  
  // Convierte el objeto a formato JSON
  var userDataJSON = JSON.stringify(userData);
  
  // Almacena los datos en el Local Storage
  localStorage.setItem("userData", userDataJSON);
  
  // Redirecciona a otra página o realiza alguna acción adicional si es necesario
})});