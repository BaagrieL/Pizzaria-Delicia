<?php
    // Exemplo de código PHP para processar dados do formulário
$pizzaNome = $_POST['pizza_nome'];
$pizzaValor = $_POST['pizza_valor'];

// Agora você pode usar $pizzaNome e $pizzaValor como necessário na página do carrinho
// Exemplo de mensagens de depuração

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Carrinho de compras</title>
    <link rel="shortcut icon" href="../imagens/logo.png" type="image/x-icon">
    <link rel="stylesheet" href="style.css">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
</head>

<body>
    <header>
        <span>Pizzaria <b>Delicia</b></span>
    </header>
    <main>
        <div class="titulo-pagina">Seu carrinho</div>

        <div class="conteudo">
            <section>
                <table>
                    <thead>
                        <tr>
                            <th>Produto</th>
                            <th>Preço</th>
                            <th>Quantidade</th>
                            <th>Total</th>
                            <th>-</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="produto">
                            <td>
                                <img src="https://picsum.photos/70/80" alt="">
                                <div class="info">
                                    <div class="produto-nome"><b>Nome da pizza</b></div>
                                </div>
                            </td>
                            <td class="preco">R$ 70</td>
                            <td>
                                <div class="qtd">
                                    <button onclick="atualizarQuantidade(this, -1)"><i class='bx bx-minus'></i></button>
                                    <span>1</span>
                                    <button onclick="atualizarQuantidade(this, 1)"><i class='bx bx-plus'></i></button>
                                </div>
                            </td>
                            <td class="total">R$ 20</td>
                            <td>
                                <button class="delete"><i class='bx bx-x'></i></button>
                            </td>
                            
                        </tr>
                        <tr class="produto">
                            <td>
                                <img src="https://picsum.photos/70/80" alt="">
                                <div class="info">
                                    <div class="produto-nome"><b>Nome da pizza</b></div>
                                </div>
                            </td>
                            <td class="preco">R$ 80</td>
                            <td>
                                <div class="qtd">
                                    <button onclick="atualizarQuantidade(this, -1)"><i class='bx bx-minus'></i></button>
                                    <span>1</span>
                                    <button onclick="atualizarQuantidade(this, 1)"><i class='bx bx-plus'></i></button>
                                </div>
                            </td>
                            <td class="total">R$ 20</td>
                            <td>
                                <button class="delete"><i class='bx bx-x'></i></button>
                            </td>
                            
                        </tr>
                        <tr class="produto">
                            <td>
                                <img src="https://picsum.photos/70/80" alt="">
                                <div class="info">
                                    <div class="produto-nome"><b>Nome da pizza</b></div>
                                </div>
                            </td>
                            <td class="preco">R$ 20</td>
                            <td>
                                <div class="qtd">
                                    <button onclick="atualizarQuantidade(this, -1)"><i class='bx bx-minus'></i></button>
                                    <span>1</span>
                                    <button onclick="atualizarQuantidade(this, 1)"><i class='bx bx-plus'></i></button>
                                </div>
                            </td>
                            <td class="total">R$ 20</td>
                            <td>
                                <button class="delete"><i class='bx bx-x'></i></button>
                            </td>
                            
                        </tr>
                        <!-- Adicione outras linhas conforme necessário -->
                    </tbody>
                </table>
            </section>
            <aside>
                <div class="box">
                    <header>Resumo da compra</header>
                    <div class="info">
                        <div class="sub-total">
                            <span>Sub-total</span>
                            <span class="subTotalValor">R$ 20</span>
                        </div>
                        <div class="frete">
                            <span>Frete</span>
                            <span>Gratuito</span>
                        </div>
                        <div class="total-geral">
                            <span>Total</span>
                            <span class="totalGeralValor">R$ 20</span>
                        </div>
                    </div>
                    <footer>
                        <span>Total</span>
                        <span class="total-final">R$ 20</span>
                    </footer>
                </div>
                <button>Finalizar compra</button>
            </aside>
        </div>
    </main>

    <script>
        document.addEventListener('DOMContentLoaded', function () {
    const totalElement = document.querySelector('.total-final');

    function atualizarValores() {
        let totalGeral = 0;

        document.querySelectorAll('.produto').forEach((linhaProduto) => {
            const precoUnitario = parseFloat(linhaProduto.querySelector('.preco').textContent.replace('R$', '').trim());
            let quantidade = parseInt(linhaProduto.querySelector('.qtd span').textContent);

            if (quantidade < 1) {
                quantidade = 1;
                linhaProduto.querySelector('.qtd span').textContent = quantidade;
            }

            const total = precoUnitario * quantidade;
            totalGeral += total;

            linhaProduto.querySelector('.total').textContent = `R$ ${total.toFixed(2)}`;
        });

        totalElement.textContent = `R$ ${totalGeral.toFixed(2)}`;
    }

    window.atualizarQuantidade = function (botao, incremento) {
        const linhaProduto = botao.closest('.produto');

        let quantidade = parseInt(linhaProduto.querySelector('.qtd span').textContent) + incremento;

        if (quantidade < 1) {
            quantidade = 1;
        }

        linhaProduto.querySelector('.qtd span').textContent = quantidade;
        atualizarValores();
    };

    atualizarValores();
});

    </script>
</body>

</html>
