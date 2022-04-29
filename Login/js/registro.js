var localStorageKeyName = 'dta';

            loadFromLocalStorage();

            document.querySelector("#btnSaveProduct").addEventListener('click', function () {
                var name = document.getElementById("txtNombre"),
                    usuario = document.getElementById("txtUser"),
                    contra = document.getElementById("txtContra");
                    email = document.getElementById("txtEmail");
                    rol = document.getElementById("txtRol");

                // Validate
                if (name.value.length === 0 || usuario.value.length === 0 || contra.value.length === 0 || email.value.length === 0 || rol.value.length === 0) return;

                var user = {
                    name: name.value,
                    usuario: usuario.value,
                    contra: contra.value,
                    email: email.value,
                    rol: rol.value
                };

                // Clean data
                name.value = '';
                usuario.value = '';
                contra.value = '';
                email.value = '';
                rol.value = '';

                // Append to my localStorage
                appendObjectToLocalStorage(user);
            })

            function appendObjectToLocalStorage(obj) {
                var users = [],
                    dataInLocalStorage = localStorage.getItem(localStorageKeyName);

                if (dataInLocalStorage !== null) {
                    users = JSON.parse(dataInLocalStorage);
                    alert('Guardado');
                }

                users.push(obj);

                localStorage.setItem(localStorageKeyName, JSON.stringify(users));

                loadFromLocalStorage();
            }

            function loadFromLocalStorage() {
                var users = [],
                    dataInLocalStorage = localStorage.getItem(localStorageKeyName),
                    gridBody = document.querySelector("#userTable tbody");

                if (dataInLocalStorage !== null) {
                    users = JSON.parse(dataInLocalStorage);
                }

                // Draw TR from TBODY
                gridBody.innerHTML = '';

                users.forEach(function (x, i) {
                    var tr = document.createElement("tr"),
                        tdName = document.createElement("td"),
                        tdUsuario = document.createElement("td"),
                        tdContra = document.createElement("td"),
                        tdEmail = document.createElement("td"),
                        tdRol = document.createElement("td"),
                        tdElimi = document.createElement("td"),
                        btnElimi = document.createElement("button");

                    tdName.innerHTML = x.name;
                    tdUsuario.innerHTML = x.usuario;
                    tdContra.innerHTML = x.contra;
                    tdEmail.innerHTML = x.email;
                    tdRol.innerHTML = x.rol;

                    btnElimi.textContent = 'Eliminar';
                    btnElimi.className = 'btn btn-xs btn-danger';
                    btnElimi.addEventListener('click', function(){
                        removeFromLocalStorage(i);
                    });

                    tdElimi.appendChild(btnElimi);

                    tr.appendChild(tdName);
                    tr.appendChild(tdUsuario);
                    tr.appendChild(tdContra);
                    tr.appendChild(tdEmail);
                    tr.appendChild(tdRol);
                    tr.appendChild(tdElimi);

                    gridBody.appendChild(tr);
                    
                });
            }

            function removeFromLocalStorage(index){
                var users = [],
                    dataInLocalStorage = localStorage.getItem(localStorageKeyName);

                users = JSON.parse(dataInLocalStorage);

                users.splice(index, 1);

                localStorage.setItem(localStorageKeyName, JSON.stringify(users));

                loadFromLocalStorage();
            }