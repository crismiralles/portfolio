// Filtro de proyectos por categoría
function filtrar(categoria) {
  if (categoria === "todos") {
    mostrarProyectos(proyectos);
  } else {
    const filtrados = proyectos.filter(p => p.categoria === categoria);
    mostrarProyectos(filtrados);
  }
}

// Ordenar alfabéticamente
function ordenarProyectos() {
  const ordenados = [...proyectos].sort((a, b) => a.titulo.localeCompare(b.titulo));
  mostrarProyectos(ordenados);
}

// Validar formulario de contacto
function validarFormulario(event) {
  event.preventDefault();
  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  if (!nombre || !email || !mensaje) {
    alert("Por favor, rellena todos los campos.");
    return false;
  }

  alert("¡Mensaje enviado correctamente!");
  document.querySelector("form").reset();
  return true;
}