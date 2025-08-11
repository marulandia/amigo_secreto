// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim(); // trim() para eliminar espacios extra

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    listaAmigos.push(nombre);
    mostrarLista();
    input.value = "";
}
