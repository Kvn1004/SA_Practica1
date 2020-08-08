function listaUsuarios() {
    $.ajax({
        type: "GET",
        crossDomain: true,
        url: "https://api.softwareavanzado.world/index.php?webserviceClient=administrator&webserviceVersion=1.0.0&option=contact&api=hal",
        success: function(response) {
            var tablaUsuarios = "";
            var datos = response._embedded.item;
            console.log('callback success: ', datos);
            var tabla = document.createElement('table');
            for (var i = 0; i < datos.length; i++) {
                var tr = document.createElement('tr');
                var td = document.createElement('td');
                var contc = document.createTextNode(datos[i].name);
                td.appendChild(contc);
                tr.appendChild(td);
                tabla.appendChild(tr);
            }
            document.getElementById("tablaUsuarios").appendChild(tabla);
        },
        error: function(xhr, status, error) {
            console.log(xhr + ", " + status + ", " + error);
            alert('Error en la comunicación con el servidor');
        }
    })
}