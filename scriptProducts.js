//variables
let allContainerCart = document.querySelector('.products');
let containerBuyCart = document.querySelector('.card-items');
let priceTotal = document.querySelector('.price-total')
let amountProduct = document.querySelector('.count-product');


const products = document.querySelector('.products');
fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(json => {
        json.forEach(element => {
            console.log(element);
            const newDiv = document.createElement("div");
            newDiv.id = "miDiv";
            newDiv.innerHTML = `
                <div class="carts">
                <div>
                    <img src="${element.image}" alt="">
                     <p><span>${element.price}</span>$</p>
                 </div>
                 <p class="title">${element.title}</p>
                 <a href="" data-id="${element.id}" class="btn-add-cart">add to cart</a>
                 <a href="" data-id="${element.id}" class="btn-edit-cart>edit card</a>
            </div>
                `
            const infoJSON = JSON.stringify(element);
            localStorage.setItem(`newElement${element.id}`, `${element}${element.id}`)
            products.appendChild(newDiv);
        })
    })


let buyThings = [];
let totalCard = 0;
let countProduct = 0;

const card = document.getElementById('miDiv');

// card.addEventListener('click', () => {
//     window.location.href = './editarProducto.html?info=' + encodeURIComponent(infoJSON);
// })

//functions
loadEventListenrs();
function loadEventListenrs() {
    allContainerCart.addEventListener('click', addProduct);

    containerBuyCart.addEventListener('click', deleteProduct);
}

function addProduct(e) {
    e.preventDefault();
    if (e.target.classList.contains('btn-add-cart')) {
        const selectProduct = e.target.parentElement;
        readTheContent(selectProduct);
    }
}

function deleteProduct(e) {
    if (e.target.classList.contains('delete-product')) {
        const deleteId = e.target.getAttribute('data-id');

        buyThings.forEach(value => {
            if (value.id == deleteId) {
                let priceReduce = parseFloat(value.price) * parseFloat(value.amount);
                totalCard = totalCard - priceReduce;
                totalCard = totalCard.toFixed(2);
            }
        });
        buyThings = buyThings.filter(product => product.id !== deleteId);

        countProduct--;
    }
    //FIX: El contador se quedaba con "1" aunque ubiera 0 productos
    if (buyThings.length === 0) {
        priceTotal.innerHTML = 0;
        amountProduct.innerHTML = 0;
    }
    loadHtml();
}

function readTheContent(product) {
    const infoProduct = {
        image: product.querySelector('div img').src,
        title: product.querySelector('.title').textContent,
        price: product.querySelector('div p span').textContent,
        id: product.querySelector('a').getAttribute('data-id'),
        amount: 1
    }

    totalCard = parseFloat(totalCard) + parseFloat(infoProduct.price);
    totalCard = totalCard.toFixed(2);

    const exist = buyThings.some(product => product.id === infoProduct.id);
    if (exist) {
        const pro = buyThings.map(product => {
            if (product.id === infoProduct.id) {
                product.amount++;
                return product;
            } else {
                return product
            }
        });
        buyThings = [...pro];
    } else {
        buyThings = [...buyThings, infoProduct]
        countProduct++;
    }
    loadHtml();
    //console.log(infoProduct);
}

function loadHtml() {
    clearHtml();
    buyThings.forEach(product => {
        const { image, title, price, amount, id } = product;
        const row = document.createElement('div');
        row.classList.add('item');
        row.innerHTML = `
            <img src="${image}" alt="">
            <div class="item-content">
                <h5>${title}</h5>
                <h5 class="cart-price">${price}$</h5>
                <h6>Amount: ${amount}</h6>
            </div>
            <span class="delete-product" data-id="${id}">X</span>
        `;

        containerBuyCart.appendChild(row);

        priceTotal.innerHTML = totalCard;

        amountProduct.innerHTML = countProduct;
    });
}
function clearHtml() {
    containerBuyCart.innerHTML = '';
}

function agregarproducto() {

    const name = document.querySelector(".name");
    const price = document.querySelector(".price");
    const description = document.querySelector(".description");
    const imagen = document.querySelector(".image");
    const category = document.querySelector(".categoria");
    fetch('https://fakestoreapi.com/products', {
        method: "POST",
        body: JSON.stringify(
            {
                title: name.value,
                price: price.value,
                description: description.value,
                image: imagen.value,
                category: category.value
            }
        )
    })
        .then(res => res.json())
        .then(json => {
            localStorage.setItem('nuevoElemento', json);
        })
}