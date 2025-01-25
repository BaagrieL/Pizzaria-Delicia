export class ProdutoView {
    constructor(elemento) {
        this._elemento = elemento;
        this._totalElemento = document.querySelector('#totalFinal');
        this._subTotalElemento = document.querySelector('span.subTotalValor');
    }

    template(model) {
        return `
            ${model.map(produto => `
                <tr>
                    <td>
                        <div class="produto">
                            <img src="../imagens/pizza-icon.png" alt="" height="60px">
                            <div class="info">
                                <div class="produto-nome"><b>${produto.nome}</b></div>
                            </div>
                        </div>
                    </td>
                    <td class="preco" id="preco">${produto.preco.toFixed(2)}</td>
                    <td>
                        <div class="qtd" data-index="${produto.id}">
                            <button data-action="minus"><i class='bx bx-minus'></i></button>
                            <span>${produto.quantidade}</span>
                            <button data-action="plus"><i class='bx bx-plus'></i></button>
                        </div>
                    </td>
                    <td class="total">${produto.quantidade * produto.preco}</td>
                    <td>
                        <button class="delete remove-btn" data-index="${produto.id}"><i class='bx bx-x'></i></button>
                    </td>
                </tr>
            `).join('')}
                    
                    
        `;
    }

    update (model) {
        this._elemento.innerHTML = this.template(model);
    }

    atualizarTotal(total) {
        this._totalElemento.innerHTML = total;
        this._subTotalElemento.innerHTML = total;
    }
    
    addDecrementarQuantidadeEventListener(decrementarQuantidade) {
        this._elemento.querySelectorAll('.qtd button[data-action="minus"]').forEach(btn => {
            btn.addEventListener('click', () => decrementarQuantidade(btn));
        });
    }
    
    addIncrementarQuantidadeEventListener(incrementarQuantidade) {
        this._elemento.querySelectorAll('.qtd button[data-action="plus"]').forEach(btn => {
            btn.addEventListener('click', () => incrementarQuantidade(btn));
        });
    }   
    
    addRemoverProdutoEventListener(removerProduto) {
        this._elemento.querySelectorAll('.remove-btn').forEach(btn => {
            btn.addEventListener('click', () => removerProduto(btn));
        });
    }
}