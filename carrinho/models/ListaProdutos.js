export class ListaProdutos {
    constructor() {
        this._produtos = [];
    }

    adicionarProduto(produto) {
        if(this._produtos.find(produtoItem => produtoItem.nome === produto.nome) === undefined) {
            produto.setId(this._produtos.reduce((maxId, produtoItem) => Math.max(produtoItem.id, maxId), -1) + 1);
            this._produtos.push(produto);
            
            
        } else {
            const produtoItem = this._produtos.find(produtoItem => produtoItem.nome === produto.nome);
            produtoItem.setQuantidade(produtoItem.quantidade + 1);
        }
    }

    get produtos() {
        return [].concat(this._produtos);
    }

    getProdutosById(id) {
        return this._produtos.find(produto => produto.id == id)
    }

    removerProduto(id) {
        this._produtos = this._produtos.filter(produto => produto.id != id);
        this.atualizarNoLocalStorage();
    }

    removerTodosProdutos() {
        this._produtos = [];
        this.atualizarNoLocalStorage();
    }

    atualizarNoLocalStorage() {
        localStorage.setItem('cartItems', JSON.stringify(this._produtos));
        localStorage.setItem('total', this.calcularTotal());
    }

    calcularTotal() {
        return this._produtos.reduce((total, produto) => total + produto.preco * produto.quantidade, 0).toFixed(2);
    }
}