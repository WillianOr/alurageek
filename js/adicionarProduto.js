import { conectarAPI } from "./main.js";
const formularioProduto = document.querySelector("[data-formulario");

async function dadosProduto(evento) {
    evento.preventDefault();

    const nome = document.querySelector("[data-nome]").value;
    const valor = document.querySelector("[data-valor]").value;
    const imagem = document.querySelector("[data-imagem]").value;

    await conectarAPI.novoProduto(nome, valor, imagem);

    console.log(conectarAPI.listaDeProdutos());

}

formularioProduto.addEventListener("submit", evento => dadosProduto(evento));

