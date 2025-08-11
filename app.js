// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombre); // usamos el array amigos
    mostrarLista();
    input.value = "";
}

function mostrarLista() {
  const listaHTML = document.getElementById("listaAmigos");

  listaHTML.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement("li");
    li.textContent = amigos[i];
    listaHTML.appendChild(li);
  }
}

function sortearAmigo() {
    const listaHTML = document.getElementById("listaAmigos");
    if (listaHTML === "") {
        alert("No hay amigos para sortear");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    const resultadoHTML = document.getElementById("resultado");
    resultadoHTML.innerHTML = `<li>El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
}
