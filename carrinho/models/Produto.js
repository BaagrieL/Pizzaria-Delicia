export class Produto {
    constructor(_nome, _preco, _quantidade = 1) {
        this._id;
        this._nome = _nome;
        this._preco = _preco;
        this._quantidade = _quantidade;
    }

    get id () {
        return this._id;
    }

    get nome () {
        return this._nome;
    }

    get preco () {
        return this._preco;
    }

    get quantidade () {
        return this._quantidade;
    }

    setId (id) {
        this._id = id;
    }

    setNome (nome) {
        this._nome = nome;
    }

    setPreco (preco) {
        this._preco = preco;
    }

    setQuantidade (quantidade) {
        this._quantidade = quantidade;
    }
}