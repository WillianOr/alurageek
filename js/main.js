async function listaDeProdutos() {
    const conexao = await fetch("http://localhost:3000/produtos");
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

async function novoProduto(nome, valor, imagem) {
    const conexao = await fetch("http://localhost:3000/produtos", {
        method: "POST",
        headers: {
            "content-type": "aplication/json"
        },
        body: JSON.stringify({
            nome: nome,
            valor: valor,
            imagem: imagem
        })
    });
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function excluirProduto(id) {
    const conexao = await fetch(`http://localhost:3000/produtos/${id}`, {
        method: "DELETE"
    });
}

//verifica se tem algum produto e caso não tenha coloca um texto
async function listaVazia() {
    const vazio = await listaDeProdutos();
    let mostrar = document.querySelector(".alerta");
    let conteiner = document.querySelector(".prateleira__produtos");
    if (vazio[0]) {
        mostrar.style.display = "none";
        conteiner.style.display = "flex";
    } else {
        mostrar.style.display = "flex";
        conteiner.style.display = "none";
    }
}

listaVazia()

export const conectarAPI = {
    listaDeProdutos,
    excluirProduto,
    novoProduto
}