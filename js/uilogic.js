document.querySelector('.btnentrar').addEventListener('click', iniciarSesion);


function iniciarSesion(){
    var sUser = document.querySelector('#txtUsuario').value;
    var sContra = document.querySelector('#txtPassword').value;

    var bAcceso = false;

    bAcceso = validarCredenciales(sUser, sContra);
    
    if(bAcceso == true){
        ingresar();
        alert('Bienvenido');
    }else{
        alert('Usuario y/o contraseña incorrectas');
    }

}


function ingresar(){
    var rol = sessionStorage.getItem('rolUsuarioActivo');
    switch(rol){
        case 'Administrador':
            window.location.href = '../Administrador/index_administrador.html';
        break;

        case 'Cliente':
            window.location.href = '../index.html';
        break;

        default:
            window.location.href = '../index.html';
        break;
    }
}