//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigos = document.getElementById("listaAmigos");
let resultado = document.getElementById("resultado");
let amigos = [];

function adicionarAmigo(){
    const input = document.getElementById("amigo");
    const nome = input.value.trim(); //remove espaços

    if(nome !== ""){
        amigos.push(nome);
        input.value = "";
    } else {
        alert("Digite um nome antes de adicionar!");
    }
    
    listaAmigos.innerHTML += nome + "<br>";
    
}



function sortearAmigo(){
    numeroDeAmigos = amigos.length;

    // console.log(numeroDeAmigos)

    if(numeroDeAmigos < 2){
        alert("Digite no mínimo dois nomes!");
    } else {
        resultado.innerHTML = ""; 
        const nomeSorteado = amigos[Math.floor(Math.random() * amigos.length)];
        resultado.innerHTML += "<br>Amigo sorteado: " + nomeSorteado
        // console.log(nomeSorteado);
    }
}

