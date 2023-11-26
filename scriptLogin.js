document.getElementById("btnLogin").addEventListener("click", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente
    
    // Captura los valores de los campos del formulario
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Obtiene los datos almacenados en el Local Storage
    var storedData = localStorage.getItem("userData");
    var storedDataObj = JSON.parse(storedData);
    // Compara los datos capturados con los datos almacenados en el Local Storage
    if (username === storedDataObj.username && password === storedDataObj.password) {
      // Los datos coinciden, se permite el inicio de sesión
      // Redirecciona a la página de product.html
      window.location.href = "./productos.html";
    } else {
      // Los datos no coinciden, se bloquea el inicio de sesión
      // Muestra un mensaje de error al usuario
      alert("El nombre de usuario o la contraseña son incorrectos.");
    }
  });