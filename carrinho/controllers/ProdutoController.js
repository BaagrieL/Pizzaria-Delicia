import { Produto } from "../models/Produto.js";
import { ListaProdutos } from "../models/ListaProdutos.js";
import { ProdutoView } from "../views/ProdutoView.js";

export class ProdutoController {
    constructor() {
        this._listaProdutos = new ListaProdutos();
        this.ProdutoView = new ProdutoView(document.querySelector('#produtos-tbody'));
        this.ProdutoView.update(this._listaProdutos.produtos);
        this.ProdutoView.atualizarTotal(this._listaProdutos.calcularTotal());
    }

    adicionarProduto(nome, preco, quantidade) {
        this._listaProdutos.adicionarProduto(new Produto(nome, preco, quantidade));

        this.ProdutoView.update(this._listaProdutos.produtos);
        this.ProdutoView.atualizarTotal(this._listaProdutos.calcularTotal());
    }

    addDecrementarQuantidadeEventListener() {
        const callback = (button) => {
            const produtoIndex = button.parentElement.getAttribute('data-index');

            const produto = this._listaProdutos.getProdutosById(produtoIndex);
            console.log('Produto encontrado:', produto);

            if (produto.quantidade > 0) {
                produto.setQuantidade(produto.quantidade - 1);
                this._listaProdutos.atualizarNoLocalStorage();
                this.ProdutoView.update(this._listaProdutos.produtos);
                this.ProdutoView.atualizarTotal(this._listaProdutos.calcularTotal());
                this.addAllEventListeners();
            }
            if (produto.quantidade === 0) {
                this._listaProdutos.removerProduto(produtoIndex);
                this.ProdutoView.update(this._listaProdutos.produtos);
                this.ProdutoView.atualizarTotal(this._listaProdutos.calcularTotal());
                this.addAllEventListeners();
            }
        };

        this.ProdutoView.addDecrementarQuantidadeEventListener(callback);
    }

    addIncrementarQuantidadeEventListener() {
        const callback = (button) => {
            const produtoIndex = button.parentElement.getAttribute('data-index');

            const produto = this._listaProdutos.getProdutosById(produtoIndex);
            console.log('Produto encontrado:', produto);

            produto.setQuantidade(produto.quantidade + 1);
            this._listaProdutos.atualizarNoLocalStorage();
            this.ProdutoView.update(this._listaProdutos.produtos);
            this.ProdutoView.atualizarTotal(this._listaProdutos.calcularTotal());
            this.addAllEventListeners();
        };

        this.ProdutoView.addIncrementarQuantidadeEventListener(callback);
    }

    addAllEventListeners() {
        this.addDecrementarQuantidadeEventListener();
        this.addIncrementarQuantidadeEventListener();
        this.addRemoverProdutoEventListener();
    }

    addRemoverProdutoEventListener() {
        const callback = (button) => {
            const produtoIndex = button.getAttribute('data-index');
            this._listaProdutos.removerProduto(produtoIndex);
            this.ProdutoView.update(this._listaProdutos.produtos);
            this.ProdutoView.atualizarTotal(this._listaProdutos.calcularTotal());
            this.addAllEventListeners();
        }

        this.ProdutoView.addRemoverProdutoEventListener(callback);
    }

    finalizarCompra = () => {
        if (this._listaProdutos.produtos.length === 0) {
            window.alert('Seu carrinho está vazio! Que tal adicionar alguns produtos?');
            return;
        }
        if (window.confirm('Deseja finalizar a compra?')) {
            const total = this._listaProdutos.calcularTotal();
            this._listaProdutos.removerTodosProdutos();
            this.ProdutoView.update(this._listaProdutos.produtos);
            this.ProdutoView.atualizarTotal(this._listaProdutos.calcularTotal());
            alert(`Compra finalizada! Total: R$ ${total}`);
        };
    }
}