
window.addEventListener("load", (event) => {

    console.log("Todo OK");

    const seleccion = document.getElementById("input-ficheros");

    seleccion.addEventListener("change", (event) => {
        let listaFicheros = event.target.files;
        console.log(listaFicheros);
        procesarSeleccion(listaFicheros);
    });

});

function procesarSeleccion(seleccion) {

    console.log("Procesando selección");

    for (const file of seleccion) {
        let name = file.name;
        let type = file.type;
        let size = file.size;

        console.log(name + ", " + type + ", " + size);
        if (validarFichero(file)) {
            cargaImagen(file);
        }
    };

};

function validarFichero(file) {
    let mensajeError = document.getElementById("mensajeError");
    let type = file.type;
    if (type === "image/jpeg" || type === "image/png" || type === "image/svg+xml") {
        mensajeError.innerHTML = "";
        console.log("El archivo es válido.");
        return true;
    } else {
        mensajeError.innerHTML = "Error: Solo se permiten archivos JPG, PNG o SVG.";
        return false;
    };
}


function cargaImagen(imagen) {

    console.log("Cargando imágenes");

    let reader = new FileReader();

    let nombreFichero = imagen.name;

    reader.addEventListener("error", () => {

        console.error("Error al cargar la imagen");

    })

    reader.addEventListener("load", (event) => {

        let card = crearElementoCard(event.target.result, nombreFichero)

        let fila = document.getElementById("fila");
        fila.appendChild(card);

        console.log("Se van a crear las imágenes");

    });

    reader.readAsDataURL(imagen);
};

function crearElementoCard(datosImagen, texto) {

    let imagen = document.createElement("img");
    //imagen.className = "col-12 col-md-6 col-lg-3";
    imagen.src = datosImagen;

    let nombre = document.createElement("p");
    nombre.innerHTML = texto;

    let card = document.createElement("div");
    card.appendChild(imagen);
    card.appendChild(nombre);
    card.className = obtenerCols();

    return card;
};

function obtenerCols() {
    let columnas = "col-12 col-md-6 col-lg-3";
    let opcionUsuario = document.getElementById("opcionUsuario").value;
    console.log(opcionUsuario);
    if (opcionUsuario == "Grande") {
        columnas = "col-12 col-md-4 col-lg-6";
    } else if (opcionUsuario == "Mediano") {
        columnas = "col-12 col-md-3 col-lg-4";
    } else if (opcionUsuario == "Pequenio") {
        columnas = "col-12 col-md-3 col-lg-2";
    };

return columnas;
}