//variables
let allContainerCart = document.querySelector('.products');
let containerBuyCart = document.querySelector('.card-items');
let priceTotal = document.querySelector('.price-total')
let amountProduct = document.querySelector('.count-product');

const btnCarrito = document.getElementById('btncomprarahora');

btnCarrito.addEventListener('click', () => {
    localStorage.setItem('carrito',JSON.stringify(buyThings));
})

const arrayProducts = [];
const products = document.querySelector('.products');
document.getElementById("btnAllProducts").addEventListener("click", function() {

fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(json => {
        const selected1=json.slice(0,3);
        const arrayDeArrays = selected1.map(item => [item.id, item.title, item.price]);

        // Guardar el array de arrays en el Local Storage
        localStorage.setItem('arrayDeArrays', JSON.stringify(arrayDeArrays));
        let carrito = JSON.parse(localStorage.getItem('arrayDeArrays'));
        const selected2=json.slice(0,3);
        const arrayDeArrays2 = selected2.map(item => [item.id, item.title, item.price]);
        carrito.push(arrayDeArrays2);

        // Guardar el array de arrays en el Local Storage
        localStorage.setItem('arrayDeArrays', JSON.stringify(arrayDeArrays));
        
        // console.log(arrayDeArrays);
        
        // Guardar el array de arrays en el Local Storage

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
                 <div>
                 <a href="" data-id="${element.id}"class="btn-add-cart">add to cart</a>
                 <input type="button" value="ver mas" class="cartsBtn" onclick ="mostrarProducts(${element.id})">
                 <input type="button" value="Eliminar" class="cartsBtn" onclick ="deleteProduct(${element.id})">
                 </div>
            </div>
                `
                arrayProducts.push(element);
                
                // const a = newDiv.querySelector('')
                // a.addEventListener('click',()=>{
                //  const element = a.target.parentElement;
                //  readTheContent(element);
                // })

                // newDiv.addEventListener('click', () => {
                //     window.location.href = `./editarProducto.html?id=${element.id}`;
                // })
            const infoJSON = JSON.stringify(element);
            // localStorage.setItem(`newElement${element.id}`, `${element}${element.id}`)
            products.appendChild(newDiv);
        })
        localStorage.setItem('products', JSON.stringify(arrayProducts));
    
})});

document.getElementById("btnElectronic").addEventListener("click", function() {
    // Acciones a realizar cuando se hace clic en el botón "Electronic"
    fetch('https://fakestoreapi.com/products/category/electronics').then(response => {
    return response.json();
}).then(json => {
    json.forEach(element => {
        console.log(element);
        const newDiv = document.createElement("div");
        newDiv.id = "miDiv";
        newDiv.innerHTML="";
        newDiv.innerHTML = `
            <div class="carts">
            <div>
                <img src="${element.image}" alt="">
                 <p><span>${element.price}</span>$</p>
             </div>
             <p class="title">${element.title}</p>
             <div>
             <a href="" data-id="${element.id}"class="btn-add-cart">add to cart</a>
             <input type="button" value="ver mas" class="cartsBtn" onclick ="mostrarProducts(${element.id})">
             <input type="button" value="Eliminar" class="cartsBtn" onclick ="deleteProduct(${element.id})">
             </div>
        </div>
            `;
            products.appendChild(newDiv);
    })})
  });

  document.getElementById("btnJewelery").addEventListener("click", function() {
      // Acciones a realizar cuando se hace clic en el botón "Electronic"
      fetch('https://fakestoreapi.com/products/category/jewelery').then(response => {
        return response.json();
    }).then(json => {
        json.forEach(element => {
            console.log(element);
            const newDiv = document.createElement("div");
            newDiv.id = "miDiv";
            newDiv.innerHTML="";
            newDiv.innerHTML = `
                <div class="carts">
                <div>
                    <img src="${element.image}" alt="">
                     <p><span>${element.price}</span>$</p>
                 </div>
                 <p class="title">${element.title}</p>
                 <div>
                 <a href="" data-id="${element.id}"class="btn-add-cart">add to cart</a>
                 <input type="button" value="ver mas" class="cartsBtn" onclick ="mostrarProducts(${element.id})">
                 <input type="button" value="Eliminar" class="cartsBtn" onclick ="deleteProduct(${element.id})">
                 </div>
            </div>
                `;
            products.appendChild(newDiv);

        })})
      });

  document.getElementById("btnMensClothing").addEventListener("click", function() {
     const name= "men's clothing" // Acciones a realizar cuando se hace clic en el botón "Electronic"
      fetch(`https://fakestoreapi.com/products/category/${name}`).then(response => {
        return response.json();
    }).then(json => {
        json.forEach(element => {
            console.log(element);
            const newDiv = document.createElement("div");
            newDiv.id = "miDiv";
            newDiv.innerHTML="";
            newDiv.innerHTML = `
                <div class="carts">
                <div>
                    <img src="${element.image}" alt="">
                     <p><span>${element.price}</span>$</p>
                 </div>
                 <p class="title">${element.title}</p>
                 <div>
                 <a href="" data-id="${element.id}"class="btn-add-cart">add to cart</a>
                 <input type="button" value="ver mas" class="cartsBtn" onclick ="mostrarProducts(${element.id})">
                 <input type="button" value="Eliminar" class="cartsBtn" onclick ="deleteProduct(${element.id})">
                 </div>
            </div>
                `;
        })})
      });

  document.getElementById("btnWomensClothing").addEventListener("click", function() {
      
    const name= "women's clothing"
    // Acciones a realizar cuando se hace clic en el botón "Electronic"
      fetch(`https://fakestoreapi.com/products/category/${name}`).then(response => {
        return response.json();
    }).then(json => {
        json.forEach(element => {
            console.log(element);
            const newDiv = document.createElement("div");
            newDiv.id = "miDiv";
            newDiv.innerHTML="";
            newDiv.innerHTML = `
                <div class="carts">
                <div>
                    <img src="${element.image}" alt="">
                     <p><span>${element.price}</span>$</p>
                 </div>
                 <p class="title">${element.title}</p>
                 <div>
                 <a href="" data-id="${element.id}"class="btn-add-cart">add to cart</a>
                 <input type="button" value="ver mas" class="cartsBtn btn-add-cart" onclick ="mostrarProducts(${element.id})">
                 <input type="button" value="Eliminar" class="cartsBtn btn-add-cart" onclick ="deleteProduct(${element.id})">
                 </div>
            </div>
                `;
            products.appendChild(newDiv);

        })})
      });

function mostrarProducts(elementid){
    window.location.href=`./editarProducto.html?id=${elementid}`;
}

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
        const selectProduct = e.target.parentElement.parentElement;
        console.log(selectProduct);
        readTheContent(selectProduct);
    }
}

function deleteProduct(id) {
    const array = JSON.parse(localStorage.getItem('products'));
    array.splice(id,1);
    localStorage.setItem('products', JSON.stringify(array));
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

    const name = document.querySelector(".name").textContent;
    const price = document.querySelector(".price").textContent;
    const description = document.querySelector(".description").textContent;
    const imagen = document.querySelector(".image").src;
    const category = document.querySelector(".categoria").textContent;
    const categoryCorrecta= '' ;
    if(category === "electronics" || category === "jewelery" || category === "men's clothing" || category === "women's clothing"){
        categoryCorrecta = category;
    }else{
        alert("La categoria que has introducido no esta permitida");

    }
    const newProduct = {
        name:name,
        price:price,
        description:description,
        image:imagen,
        category:categoryCorrecta
    };
    let productsArray = JSON.parse(localStorage.getItem('products'));
    productsArray.push(newProduct);
    localStorage.setItem('products',JSON.stringify(productsArray));
    loadHtml();
}