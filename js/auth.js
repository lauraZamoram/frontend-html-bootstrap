// js/auth.js

const API_URL = 'http://proyectofinal-env.eba-mfcifdqv.us-east-2.elasticbeanstalk.com/api/usuarios'; 

const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('errorMessage');

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Capturar el correo ingresado por el usuario
    const correoIngresado = document.getElementById('correo').value.trim().toLowerCase();

    try {
        // Petición GET a la API de usuarios
        const response = await fetch(API_URL);
        
        if (!response.ok) {
            throw new Error('No se pudo conectar con la API');
        }

        const usuarios = await response.json();

        // Buscamos si el correo existe en la lista que devuelve la API
        const usuarioValido = usuarios.find(u => u.correo.toLowerCase() === correoIngresado);

        if (usuarioValido) {
            // Guardamos el objeto completo del usuario en LocalStorage
            localStorage.setItem('usuarioSesion', JSON.stringify(usuarioValido));
            
            // Redirección al éxito
            window.location.href = 'pages/dashboard.html';
        } else {
            // Mostrar error si el correo no coincide
            errorMessage.textContent = "El correo no está registrado en el sistema.";
            errorMessage.classList.remove('d-none');
        }

    } catch (error) {
        console.error("Error en la petición:", error);
        errorMessage.textContent = "Error al conectar con el servidor.";
        errorMessage.classList.remove('d-none');
    }
});