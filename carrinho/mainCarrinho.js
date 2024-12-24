import { ProdutoController } from "./controllers/ProdutoController.js";

const spansQuantidade = document.querySelectorAll('.qtd span');
const precos = document.querySelectorAll('.preco');
const totalElements = document.querySelectorAll('.total');
const subTotalElement = document.querySelector('.subTotalValor');
const totalFinal = document.getElementById('totalFinal')
const removeBtn = document.querySelectorAll('.remove-btn');
const finalizarBtn = document.getElementById('finalizar');
const produtoController = new ProdutoController();
const produtosCarrinho = JSON.parse(localStorage.getItem('cartItems')) || [];

produtosCarrinho.forEach(produto => {
    produtoController.adicionarProduto(produto._nome, produto._preco, produto._quantidade);
});

produtoController.addAllEventListeners();
finalizarBtn.addEventListener('click', produtoController.finalizarCompra);
