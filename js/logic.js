
function obtenerListaUsuarios(){
    var listaUsuarios = JSON.parse(localStorage.getItem('listaUsuariosLs'));

    if(listaUsuarios == null){
        listaUsuarios = 
        [
            ['Kevin','klopez1703','Diosesamor17','Masculino','Administrador'],
            ['Adla','adla1234','adla1234','Femenino','Administrador'],
            ['Cesar','cesar1234','cesar1234','Masculino','Administrador'],
            ['Omar','omar1234','omar1234','Masculino','Administrador'],
            ['Steven','steven1234','steven1234','Masculino','Administrador'],
            ['Yanina','yanina1234','yanina1234','Femenino','Administrador'],
            ['Arturo','arturo1234','arturo1234','Masculino','Administrador'],

            ['Kevin','klopez2021','Diosesamor17','Masculino','Cliente'],
            ['Adla','adla2021','adla1234','Femenino','Cliente'],
            ['Cesar','cesar2021','cesar1234','Masculino','Cliente'],
            ['Omar','omar2021','omar1234','Masculino','Cliente'],
            ['Steven','steven2021','steven1234','Masculino','Cliente'],
            ['Yanina','yanina2021','yanina1234','Femenino','Cliente'],
            ['Arturo','arturo2021','arturo1234','Masculino','Cliente'],
        ]
    }
    return listaUsuarios;
}

function validarCredenciales(puser, pcontra){
    var listaUsuarios = obtenerListaUsuarios();
    var bAcceso = false;

    for(var x=0; x <listaUsuarios.length; x++){
        if(puser == listaUsuarios[x][1] && pcontra == listaUsuarios[x][2]){
            bAcceso = true;
            sessionStorage.setItem('usuarioActivo', listaUsuarios[x][1]);
            sessionStorage.setItem('rolUsuarioActivo', listaUsuarios[x][4]);
        }
    }

    return bAcceso;
}