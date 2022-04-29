

var localStorageKeyName = 'da';


loadFromLocalStorage();

document.querySelector("#btnSavePromo").addEventListener('click', function () {
    var codigo = document.getElementById("txtCod");
        producto = document.getElementById("txtPromo");
        precio = document.getElementById("txtPre");
        existencia = document.getElementById("txtExis");

    // Validate
    if (codigo.value.length == 0 || producto.value.length === 0 || !parseInt(precio.value) || !parseInt(existencia.value)) return;


    var promo = 
    {
        codigo: codigo.value,
        producto: producto.value,
        precio: precio.value,
        existencia: existencia.value,
    };
    

    // Clean data
    codigo.value = '';
    producto.value = '';
    precio.value = '';
    existencia.value = '';

    // Append to my localStorage
    appendObjectToLocalStorage(promo);
})

function appendObjectToLocalStorage(obj) {
    var promos = [],
        dataInLocalStorage = localStorage.getItem(localStorageKeyName);

    if (dataInLocalStorage !== null) {
        promos = JSON.parse(dataInLocalStorage);
        alert('Promocion Guardada');
    }

    promos.push(obj);

    localStorage.setItem(localStorageKeyName, JSON.stringify(promos));

    loadFromLocalStorage();
}

function loadFromLocalStorage() {
    var promos = [],
        dataInLocalStorage = localStorage.getItem(localStorageKeyName),
        gridBody = document.querySelector("#promoTable tbody");

    if (dataInLocalStorage !== null) {
        promos = JSON.parse(dataInLocalStorage);
    }

    // Draw TR from TBODY
    gridBody.innerHTML = '';

    promos.forEach(function (x, i) {
        var tr = document.createElement("tr"),
            tdCodigo = document.createElement("td"),
            tdProducto = document.createElement("td"),
            tdPrecio = document.createElement("td"),
            tdExistencia = document.createElement("td"),
            tdRemove = document.createElement("td"),
            btnRemove = document.createElement("button");

        tdCodigo.innerHTML = x.codigo;
        tdProducto.innerHTML = x.producto;
        tdPrecio.innerHTML = x.precio;
        tdExistencia.innerHTML = x.existencia;

        btnRemove.textContent = 'Eliminar Promo';
        btnRemove.className = 'btn btn-xs btn-danger';
        btnRemove.addEventListener('click', function(){
            removeFromLocalStorage(i);
        });

        tdRemove.appendChild(btnRemove);

        tr.appendChild(tdCodigo);
        tr.appendChild(tdProducto);
        tr.appendChild(tdPrecio);
        tr.appendChild(tdExistencia);
        tr.appendChild(tdRemove);

        gridBody.appendChild(tr);
        
    });
}

function removeFromLocalStorage(index){
    var promos = [],
        dataInLocalStorage = localStorage.getItem(localStorageKeyName);

    promos = JSON.parse(dataInLocalStorage);

    promos.splice(index, 1);

    localStorage.setItem(localStorageKeyName, JSON.stringify(promos));

    loadFromLocalStorage();
}