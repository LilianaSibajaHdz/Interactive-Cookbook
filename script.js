let listaRecetas = [];

const formulario = document.getElementById('formularioReceta');
const contenedor = document.getElementById('contenedorRecetas');
const inputBuscador = document.getElementById('buscador');

function mostrarRecetas(recetasParaMostrar) {
    contenedor.innerHTML = "";

    recetasParaMostrar.forEach((receta, indice) => {
        const tarjetaHtml = `
            <div class="col">
                <div class="card h-100 shadow-sm">
                    <img src="${receta.imagen}" class="card-img-top" alt="${receta.nombre}" style="height: 200px; object-fit: cover;">
                    <div class="card-body">
                        <h5 class="card-title text-success">${receta.nombre}</h5>
                        <h6 class="badge bg-secondary">${receta.categoria}</h6>
                        <p class="card-text mt-2"><strong>Ingredientes:</strong> ${receta.ingredientes.join(', ')}</p>
                        <p class="card-text"><strong>Pasos:</strong> ${receta.pasos.join('. ')}</p>
                    </div>
                    <div class="card-footer bg-white border-0">
                        <button class="btn btn-outline-danger btn-sm w-100" onclick="eliminarReceta(${indice})">Eliminar Receta</button>
                    </div>
                </div>
            </div>
        `;
        contenedor.innerHTML += tarjetaHtml;
    });
}


formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const nuevaReceta = {
        nombre: document.getElementById('nombre').value,
        categoria: document.getElementById('categoria').value,
        // .split(',') convierte el texto en un arreglo separando por comas
        ingredientes: document.getElementById('ingredientes').value.split(',').map(i => i.trim()),
        pasos: document.getElementById('pasos').value.split(',').map(p => p.trim()),
        imagen: document.getElementById('imagenUrl').value
    };

    listaRecetas.push(nuevaReceta);

    formulario.reset();
    mostrarRecetas(listaRecetas);
});


function eliminarReceta(indice) {
    listaRecetas.splice(indice, 1);
    mostrarRecetas(listaRecetas);
}


