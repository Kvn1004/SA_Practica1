function listaUsuarios() {
    $.ajax({
        type: "GET",
        crossDomain: true,
        url: "https://api.softwareavanzado.world/index.php?webserviceClient=administrator&webserviceVersion=1.0.0&option=contact&api=hal",
        success: function(response) {
            var datos = response._embedded.item;
            console.log('callback success: ', datos);
            for (var i = 0; i < datos.length; i++) {
                console.log(datos[i].name);
            }
        },
        error: function(xhr, status, error) {
            console.log(xhr + ", " + status + ", " + error);
            alert('Error en la comunicación con el servidor');
        }
    })
}