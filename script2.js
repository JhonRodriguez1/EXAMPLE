// script2.js ordenado y corregido
document.addEventListener("DOMContentLoaded", () => {
  // Abrir formulario con el producto seleccionado
  function abrirFormulario(producto) {
    document.getElementById("modal-compra").style.display = "flex";
    document.getElementById("producto-seleccionado").innerText =
      "Producto seleccionado: " + producto;
  }

  // Cerrar formulario
  function cerrarFormulario() {
    document.getElementById("modal-compra").style.display = "none";
  }

  // Procesar compra
  function procesarCompra(event) {
    event.preventDefault(); // Evita recargar la página
    document.getElementById("modal-compra").style.display = "none";
    document.getElementById("modal-confirmacion").style.display = "flex";
    document.getElementById("form-compra").reset();
  }

  // Cerrar confirmación
  function cerrarConfirmacion() {
    document.getElementById("modal-confirmacion").style.display = "none";
  }

  // Carrusel de imágenes
  let imagenes = document.querySelectorAll(".carousel img");
  let indiceActual = 0;

  function mostrarImagen(indice) {
    imagenes.forEach((img) => img.classList.remove("active"));
    imagenes[indice].classList.add("active");
  }

  document.getElementById("anterior").addEventListener("click", function () {
    indiceActual = indiceActual > 0 ? indiceActual - 1 : imagenes.length - 1;
    mostrarImagen(indiceActual);
  });

  document.getElementById("siguiente").addEventListener("click", function () {
    indiceActual = indiceActual < imagenes.length - 1 ? indiceActual + 1 : 0;
    mostrarImagen(indiceActual);
  });

  mostrarImagen(indiceActual);
});

document.getElementById("form-compra").addEventListener("submit", function(e) {
      e.preventDefault();
      alert("✅ Su compra ha sido exitosa y se enviará su producto en 24 horas.");
      this.reset();
    });