class Product {
    constructor(url, title, price, description, category) {
        this.url = url;
        this.title = title;
        this.price = price;
        this.description = description;
        this.category = category;
    }
}


fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json => {
        const container = document.getElementById('container');
        json.forEach(product => {
            const card = document.createElement('div');
            card.classList.add('card');

            const title = document.createElement('h2');
            title.textContent = product.title;

            const price = document.createElement('p');
            price.textContent = `Price: $${product.price}`;

            const description = document.createElement('p');
            description.textContent = product.description;

            card.appendChild(title);
            card.appendChild(price);
            card.appendChild(description);

            container.appendChild(card);
        });
    });