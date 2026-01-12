document.addEventListener('DOMContentLoaded', () => {
    const sesion = localStorage.getItem('usuarioSesion');

    if (!sesion) {
        window.location.href = '../index.html';
        return;
    }

    const usuario = JSON.parse(sesion);

    document.getElementById('nombreDisplay').textContent = usuario.nombre + " " + usuario.apellidos;
    document.getElementById('correoDisplay').textContent = usuario.correo;
    document.getElementById('rolDisplay').textContent = usuario.rol.nombre;
    document.getElementById('descDisplay').textContent = usuario.rol.descripcion;
});

function cerrarSesion() {
    localStorage.removeItem('usuarioSesion');
    window.location.href = '../index.html';
}
