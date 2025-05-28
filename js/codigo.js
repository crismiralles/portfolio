const btnTodos = document.getElementById("btn-todos");
const btnWordpress = document.getElementById("btn-wordpress");
const btnJS = document.getElementById("btn-js");
const btnBootstrap = document.getElementById("btn-bootstrap");
const proyectos = document.querySelectorAll(".proyecto");

window.addEventListener("load", () => {
  console.log("Inicio JS");

btnTodos.addEventListener("click", () => filtrarProyectos("todos"));
btnWordpress.addEventListener("click", () => filtrarProyectos("wordpress"));
btnJS.addEventListener("click", () => filtrarProyectos("js"));
btnBootstrap.addEventListener("click", () => filtrarProyectos("bootstrap"));

});

function filtrarProyectos(categoria) {
  proyectos.forEach(proyecto => {
    const cat = proyecto.dataset.categoria;
    if (categoria === "todos" || cat === categoria) {
      proyecto.style.display = "block";
    } else {
      proyecto.style.display = "none";
    }
  });
}
