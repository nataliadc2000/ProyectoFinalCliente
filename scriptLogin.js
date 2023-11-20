
const usernammeOk = '';
const passwordOk = '';

const login = document.getElementById("iniciarSessionForm");
login.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === localStorage.getItem('username') || password === localStorage.getItem('password')) {
        usernammeOk = username;
        passwordOk = password;
    }

    fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({

            username: usernammeOk,
            password: passwordOk
        })
    })
        .then(res => res.json())
        .then(json => {

            if (json.token) {
                console.log("iniciado session");
                window.location.href = "./productos.html"
            }
            // Aquí puedes realizar las acciones correspondientes después de iniciar sesión
        });
});