const chocolates = [
    { name: "Chocolate con leche", price: 3.5, image: "bombones.jpg" },
    { name: "Chocolate negro", price: 4, image: "bombones2.jpg" },
    { name: "Chocolate blanco", price: 3, image: "bombones3.jpg" },
    { name: "Chocolate de avellanas", price: 4.5, image: "bombones4.jpg" },
    { name: "Chocolate relleno de fresa", price: 4.2, image: "bombones5.jpg" }
];

const chocolateContainer = document.getElementById('chocolateContainer');
const cartItems = document.getElementById('cartItems');

// Mostrar chocolates en la página
chocolates.forEach(chocolate => {
    const chocolateDiv = document.createElement('div');
    chocolateDiv.classList.add('chocolate');

    const chocolateImage = document.createElement('img');
    chocolateImage.src = `img/${chocolate.image}`;
    chocolateImage.alt = chocolate.name;
    chocolateImage.classList.add('chocolate-img');
    chocolateDiv.appendChild(chocolateImage);

    const namePara = document.createElement('p');
    namePara.textContent = chocolate.name;
    chocolateDiv.appendChild(namePara);

    const pricePara = document.createElement('p');
    pricePara.textContent = `$${chocolate.price}`;
    chocolateDiv.appendChild(pricePara);

    const addButton = document.createElement('button');
    addButton.textContent = 'Agregar al carrito';
    addButton.addEventListener('click', () => addToCart(chocolate));
    chocolateDiv.appendChild(addButton);

    chocolateContainer.appendChild(chocolateDiv);
});

let cart = [];

// Función para agregar un chocolate al carrito
function addToCart(chocolate) {
    cart.push(chocolate);
    renderCart();
}

// Función para renderizar el carrito
function renderCart() {
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
    });
}

// Función para procesar el pago
function checkout() {
    const total = cart.reduce((acc, item) => acc + item.price, 0);
    alert(`Total a pagar: $${total.toFixed(2)}`);
}
