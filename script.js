let cartItems = getLocalStorageItens().cartItems || [];
console.log(cartItems);
mostrarCarrinho();
let total = Number(getLocalStorageItens().total) || 0;
const menuCelularBtn = document.getElementById('menuCelular');
const navbarLinks = document.querySelector('.navbar__links');

function adicionarAoCarrinho(_nome, _preco) {
    if (ehItemDuplicado(_nome)) {
        cartItems.find(item => item._nome === _nome)._quantidade++;
    } else {
        cartItems.push({ _nome, _preco , _quantidade: 1 });
    }
    total += Number(_preco);
    console.log(total);
    

    atualizarLocalStorage();
    mostrarCarrinho();
}

function ehItemDuplicado(_nome) {
    return cartItems.some(item => item._nome === _nome) ? true : false;
}

function atualizarLocalStorage() {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    localStorage.setItem('total', total);
}

function limparLocalStorage() {
    localStorage.removeItem('cartItems');
    localStorage.removeItem('total');
}

function getLocalStorageItens() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const total = localStorage.getItem('total') || 0;
    return { cartItems, total };
}

function limparCarrinho() {
    cartItems = [];
    total = 0;
    atualizarCarrinho();
}

function mostrarCarrinho() {
    const carrinhoIcon = document.getElementById('carrinho-icon');
    carrinhoIcon.style.setProperty('--carrinho-content', `"${calcularQuantidadeItens()}"`);

    if (cartItems.length > 0) carrinhoIcon.style.setProperty('--is-quantidade-carrinho-visivel', 'visible');
}

function calcularQuantidadeItens() {
    return cartItems.reduce((total, item) => total + item._quantidade, 0);
}

menuCelularBtn.addEventListener('click', () => {
    menuCelularBtn.classList.toggle('opened');
    menuCelularBtn.setAttribute('aria-expanded', menuCelularBtn.classList.contains('opened'));
    navbarLinks.classList.toggle('closed');
    navbarLinks.classList.toggle('opened');
});