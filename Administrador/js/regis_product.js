

var localStorageKeyName = 'data';


            loadFromLocalStorage();

            document.querySelector("#btnSaveProduct").addEventListener('click', function () {
                var codigo = document.getElementById("txtCodigo");
                    producto = document.getElementById("txtProducto");
                    precio = document.getElementById("txtPrecio");
                    existencia = document.getElementById("txtExistencia");
                    provee = document.getElementById("txtProveedores");

                // Validate
                if (codigo.value.length == 0 || producto.value.length === 0 || !parseInt(precio.value) || !parseInt(existencia.value) || provee.value.length == 0) return;


                var prod = 
                {
                    codigo: codigo.value,
                    producto: producto.value,
                    precio: precio.value,
                    existencia: existencia.value,
                    provee: provee.value
                };
                

                // Clean data
                codigo.value = '';
                producto.value = '';
                precio.value = '';
                existencia.value = '';
                provee.value = '';

                // Append to my localStorage
                appendObjectToLocalStorage(prod);
            })

            function appendObjectToLocalStorage(obj) {
                var prods = [],
                    dataInLocalStorage = localStorage.getItem(localStorageKeyName);

                if (dataInLocalStorage !== null) {
                    prods = JSON.parse(dataInLocalStorage);
                    alert('Producto Guardado');
                }

                prods.push(obj);

                localStorage.setItem(localStorageKeyName, JSON.stringify(prods));

                loadFromLocalStorage();
            }

            function loadFromLocalStorage() {
                var prods = [],
                    dataInLocalStorage = localStorage.getItem(localStorageKeyName),
                    gridBody = document.querySelector("#productsTable tbody");

                if (dataInLocalStorage !== null) {
                    prods = JSON.parse(dataInLocalStorage);
                }

                // Draw TR from TBODY
                gridBody.innerHTML = '';

                prods.forEach(function (x, i) {
                    var tr = document.createElement("tr"),
                        tdCodigo = document.createElement("td"),
                        tdProducto = document.createElement("td"),
                        tdPrecio = document.createElement("td"),
                        tdExistencia = document.createElement("td"),
                        tdProvee = document.createElement("td"),
                        tdRemove = document.createElement("td"),
                        btnRemove = document.createElement("button");

                    tdCodigo.innerHTML = x.codigo;
                    tdProducto.innerHTML = x.producto;
                    tdPrecio.innerHTML = x.precio;
                    tdExistencia.innerHTML = x.existencia;
                    tdProvee.innerHTML = x.provee;

                    btnRemove.textContent = 'Eliminar';
                    btnRemove.className = 'btn btn-xs btn-danger';
                    btnRemove.addEventListener('click', function(){
                        removeFromLocalStorage(i);
                    });

                    tdRemove.appendChild(btnRemove);

                    tr.appendChild(tdCodigo);
                    tr.appendChild(tdProducto);
                    tr.appendChild(tdPrecio);
                    tr.appendChild(tdExistencia);
                    tr.appendChild(tdProvee);
                    tr.appendChild(tdRemove);

                    gridBody.appendChild(tr);
                    
                });
            }

            function removeFromLocalStorage(index){
                var prods = [],
                    dataInLocalStorage = localStorage.getItem(localStorageKeyName);

                prods = JSON.parse(dataInLocalStorage);

                prods.splice(index, 1);

                localStorage.setItem(localStorageKeyName, JSON.stringify(prods));

                loadFromLocalStorage();
            }