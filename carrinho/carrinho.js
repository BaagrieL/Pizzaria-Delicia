document.addEventListener('DOMContentLoaded', function () {
    const precoElement = document.querySelector('.preco');
    const quantidadeElement = document.querySelector('.qtd span');
    const totalElement = document.querySelector('.total');

    let precoUnitario = 69;
    let quantidade = 1;

    function atualizarValores() {
        const total = precoUnitario * quantidade;

        precoElement.textContent = `R$ ${precoUnitario.toFixed(2)}`;
        quantidadeElement.textContent = quantidade;
        totalElement.textContent = `R$ ${total.toFixed(2)}`;
    }



    window.atualizarQuantidade = function (incremento) {
        quantidade += incremento;
        if (quantidade < 1) {
            quantidade = 1;
        }
        atualizarValores();
    };
    

    atualizarValores();
});

window.atualizarQuantidade = function (incremento) {
    quantidade += incremento;
    if (quantidade < 1) {
        quantidade = 1;
    }
    atualizarValores();
};
