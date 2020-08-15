var token = function autenticar() {
    $.ajax({
        type: "POST",
        crossDomain: true,
        dataType: "json",
        url: "https://api.softwareavanzado.world/index.php?webserviceClient=administrator&webserviceVersion=1.0.0&option=contact&api=hal",
        headers: {
            "Accept": "application/json",
            "Authorization": "Basic"
        },

        data: {
            grant_type: "client_credentials",
            client_id: "sa",
            client_secret: "fb5089840031449f1a4bf2c91c2bd2261d5b2f122bd8754ffe23be17b107b8eb103b441de3771745",
        },

        success: function(response) {
            console.log(response.access_token);
        },
        error: function(xhr, status, error) {
            console.log(xhr + ", " + status + ", " + error);
        }
    })
}

//Función para obtener la lista de usuarios desde la API, usando AJAX
function listaUsuarios() {
    var test = token;
    console.log(test);
    $.ajax({
        type: "GET",
        crossDomain: true,
        url: "https://api.softwareavanzado.world/index.php?webserviceClient=administrator&webserviceVersion=1.0.0&option=contact&api=hal",
        success: function(response) {
            var datos = response._embedded.item; //obtención del objeto JSON retornado por el servidor
            var tabla = document.createElement('table'); //creación de tabla para almacenar los contactos
            tabla.setAttribute('text-align', 'center');
            for (var i = 0; i < datos.length; i++) { //iteración sobre el array de contactos obtenido del objeto JSON y creacion de cada fila de la tabla
                var tr = document.createElement('tr');
                var td = document.createElement('td');
                var contc = document.createTextNode(datos[i].name);
                td.appendChild(contc);
                tr.appendChild(td);
                tabla.appendChild(tr);
            }
            document.getElementById("tablaUsuarios").appendChild(tabla); //se incrusta la tabla creada al documento HTML
        },
        error: function(xhr, status, error) {
            console.log(xhr + ", " + status + ", " + error);
            alert('Error en la comunicación con el servidor');
        }
    })
}

//Función para crear un usuario en la API
function crearUsuario() {
    //creación de objeto JSON con el nombre de contacto para enviarlo al servidor
    var nombre = "{\"name\":\"" + document.getElementById("nombre").value + "\"}";
    var dato = JSON.parse(nombre);

    $.ajax({
        type: "POST",
        crossDomain: true,
        data: dato,
        dataType: 'json',
        url: "https://api.softwareavanzado.world/index.php?webserviceClient=administrator&webserviceVersion=1.0.0&option=contact&api=hal",
        success: function(response) {
            alert('El contacto ha sido creado');
        },
        error: function(xhr, status, error) {
            console.log(xhr + ", " + status + ", " + error);
            alert('Error en la comunicación con el servidor');
        }
    });
}