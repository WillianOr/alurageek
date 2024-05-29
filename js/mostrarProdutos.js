import { conectarAPI } from "./main.js";

const prateleiraProdutos = document.querySelector("[data-produtos]")

export default function construirCard(nome, valor, imagem, id) {
    const produto = document.createElement("li");

    if (!valor.includes(".")) {
        valor += ".00";
    }

    produto.className = "produto";
    produto.innerHTML = `<figure>
        <img src="${imagem}" class="produto__img">
        <figcaption class="produdo__descricao">${nome}</figcaption>
    </figure>
    <div>
        <p class="produto__valor">R$ ${valor}</p>
        <img src="img/lixeira.png" alt="Excluir produdo" class="produto__excluir" data-excluir id = "${id}">
    </div>`;

    return produto;
}

async function listaProdutos() {
    const listaApi = await conectarAPI.listaDeProdutos();
    listaApi.forEach(substituir => {
        prateleiraProdutos.appendChild(
            construirCard(substituir.nome, substituir.valor, substituir.imagem, substituir.id))
    });
}




listaProdutos();