import { conectarAPI } from "./main.js";

async function excluir() {
    const listaApi = await conectarAPI.listaDeProdutos();
    const btnExcluir = document.querySelectorAll("[data-excluir]");
    btnExcluir.forEach(btn => btn.addEventListener('click', botao));

    function botao() {
        const elementoBtn = document.getElementById(this.id);
        const id = elementoBtn.id;
        console.log(id);
        return conectarAPI.excluirProduto(id);
    }
}

excluir();