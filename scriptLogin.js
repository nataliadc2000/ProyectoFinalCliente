
const username = document.getElementById("username").value;
const password = document.getElementById("password").value;


document.getElementById("iniciarSessionForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    })
        .then(res => res.json())
        .then(json => {

            if (json.token) {
                localStorage.setItem('username', json.username);
                console.log("iniciado session");
                window.location.href = "./productos.html"
            }
            // Aquí puedes realizar las acciones correspondientes después de iniciar sesión
        });
});