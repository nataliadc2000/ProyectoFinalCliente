class Product {
    constructor (title,price,description,image,category){
        this.title = title;
        this.price = price;
        this.description = description;
        this.image = image;
        this.category = category;

    }
}

url="https://fakestoreapi.com/products";
id = '';
fetch(url)
.then(res => res.json())
.then(product=>{
    product.forEach(product => {
        
       const  producto = new Product(product.title,product.price,product.description,product.image,product.category);
       console.log(producto)
       insertarProducto(producto);
    });

});


function insertarProducto( producto) {
     id= id +1;
    
         fetch(`${url}/${id}`, {
             method: "PUT",
             body: JSON.stringify({
               title: producto.title,
               price:producto.price,
               description:producto.description,
               image: producto.image,
               category: producto.category
             }),
             headers: {
               'Content-Type': 'application/json'
             }
           })
             .then(res => res.json())
             .then(product => {
                     
                     var card = document.createElement("div");
                       card.className = "card";
                 
                       var image = document.createElement("img");
                       image.src = product.image;
                       card.appendChild(image);
                 
                       var title = document.createElement("h5");
                       title.textContent = product.title;
                       card.appendChild(title);
                 
                       var price = document.createElement("p");
                       price.textContent = "Price: $" + product.price;
                       card.appendChild(price);
                 
                       var description = document.createElement("p");
                       description.textContent = product.description;
                       card.appendChild(description);
     
                       var buttonEdition = document.createElement("input");
                       buttonEdition.type="button";
                       buttonEdition.id = "btnEdition";
                       buttonEdition.value = "Editar";
                       var buttonDelete = document.createElement("input");
                       buttonDelete.type="button";
                       buttonDelete.id = "btnEdition";
                       buttonDelete.value="Borrar";
             
                       card.appendChild(buttonEdition);
                       card.appendChild(buttonDelete);
                       // Agregar la carta al contenedor de productos
                       document.getElementById("product-container").appendChild(card);
                 })
             .catch(error => console.log("Error al insertar el producto:", error));
     }

 const elee = new Product('Ejemplo Subida',15.50,'es un ejemplo de subida de producto','data:image/jpeg;base64,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','electronic');
     document.getElementById('buttonAñadir').addEventListener('click',()=>{
        insertarProducto(elee);
     })