const form = document.getElementById('loginForm');

form.addEventListener('submit', e => {
    e.preventDefault();
    const data = new FormData(form);
    const obj = {};
    data.forEach((value, key) => obj[key] = value);
    fetch('/api/sessions/login', {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(result => {
        if (result.status === 200) {
            //Ubicacion de las vistas
            console.log("Usuario autorizado")
            window.location.replace('/products');
        }else if (result.status === 401) {
            // Estado 401: Puedes manejar la autenticación fallida de alguna manera
            console.log('Autenticación fallida');
            console.error('Error de autenticación:', error);
            title = "Error de autenticación"
            text = "No fué posible autorizar el ingreso"
            Swal.fire({
                icon: 'error',
                title: title,
                text: text
            })
            // Puedes mostrar un mensaje de error al usuario, por ejemplo
        } else {
            // Otros estados: Manejar según sea necesario
            console.log('Error inesperado:', result.status);
            console.error('Error al realizar la solicitud:', error);
            title = "Error de Sistema"
            text = "No fué posible autorizar el ingreso"
            Swal.fire({
                icon: 'error',
                title: title,
                text: text
            })
        }
       // window.location.replace('/');
    }).catch(error => {
        // Manejar errores de red u otros problemas
        console.error('Error al realizar la solicitud:', error);
        title = "Error de Sistema"
        text = "No fué posible autorizar el ingreso, Revise usuario y clave"
        Swal.fire({
            icon: 'error',
            title: title,
            text: text
        })
    });
})

