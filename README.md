# Practica 1 Software Avanzado -  Conceptos básicos de SOA

Esta sencilla aplicación cliente hace uso de los webservices disponibles en https://api.softwareavanzado.world/index.php?webserviceClient=administrator&webserviceVersion=1.0.0&option=contact&api=hal&format=doc para introducir los conceptos basicos de una arquitectura orientada a servicios, utilizando los metodos POST y GET para obtener y mandar datos desde y hacia la API. 

## Instalación

Solo se necesita acceder al archivo Index.html en la carpeta raíz para ejecutar la aplicación.

## Uso

Se tiene una página simple con dos opciones: listar los contactos almacenados en la API y crear un nuevo contacto. 
Al listar los contactos se hace uso del metodo GET y se organizan los datos obtenidos en una tabla HTML para mostrarlos en la misma página.
Al crear un contacto se hace uso del metodo POST, y la aplicación mostrará un mensaje de éxito si se crea el contacto correctamente, o un mensaje de error si existió un error en la comunicación con el servidor.

## Contribución.
Pull requests para mejorar el codigo o la presentación de la página son bienvenidas.

## Licencia
[MIT](https://choosealicense.com/licenses/mit/)