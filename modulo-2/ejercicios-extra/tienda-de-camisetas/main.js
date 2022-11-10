'use strict';

//ELEMENTS
const newTshirtsSection = document.querySelector('.js_tshirts');
const shoppingCart = document.querySelector('.js_cart');
let products = [];
let cart = [];

//FETCH
// ('https://beta.adalab.es/ejercicios-extra/api/eshop/v1/cart.json')
function getAPIData() {
  fetch('./api/data.json') //https://beta.adalab.es/ejercicios-extra/api/eshop/v2/cart.json (por qué esta api no me funciona???)
    .then((response) => response.json())
    .then((data) => {
      products = data.cart.items; //asi llegamos hasta el array de objetos con el queremos operar
      paintTshirts();
    });
}

//FUNCTIONS

//1. TSHIRTS SECTION
function renderTshirt(tshirt) {
  let newTshirt = `<article class="article">`;
  newTshirt += `<img class="image" src="${tshirt.imageUrl}" alt="${tshirt.name}">`;
  newTshirt += `<h3 class="title">${tshirt.name}</h3>`;
  newTshirt += `<p>${tshirt.price}</p>`;
  newTshirt += `<span>-----</span>`;
  newTshirt += `<button class="js_add_product" data-id="${tshirt.id}">Añadir a la cesta</button>`;
  newTshirt += `</article>`;

  return newTshirt;
}

function paintTshirts() {
  let tshirts = ''; //se declara fuera porque la utilizaré fuera del for más adelante y porque sino en cada vuelta del for se machacará el codigo y se sobreescribira y lo que quiero es que se sume el codigo que se vaya generando
  for (const product of products) {
    //para nombre de constante se suele utilizar o item o el nombre del array en singular
    tshirts += renderTshirt(product);
  }
  newTshirtsSection.innerHTML = tshirts;
  listenAddButtons();
}

function incProduct(ev) {
  ev.preventDefault();
  //Obtengo el id del producto clickado para poder saber sobre qué elemento estoy haciendo click
  const clickedId = parseInt(ev.target.dataset.id); //dataset es un objeto con propiedades, con el atributo data-id se lo he añadido a los botones. Este atributo nso ayuda a saber o identificar sobre qué elemento hemos hecho click. He amañado que el id de los botones sea el mismo que el de los objetos que representan a cada articulo
  let foundItem;
  //Compruebo si está en la cesta
  for (const item of cart) {
    if (item.id === clickedId) {
      foundItem = item;
    }
  }
  //Si no está en la cesta añademelo / si SI está en la cesta entonces aumenta su cantidad
  let foundTshirt;
  if (foundItem === undefined) {
    for (let i = 0; i < products.length; i++) {
      if (products[i].id === clickedId) {
        foundTshirt = products[i];
      }
    }
    cart.push({
      name: foundTshirt.name,
      price: foundTshirt.price,
      imageUrl: foundTshirt.imageUrl,
      description: foundTshirt.description,
      sizes: foundTshirt.sizes,
      quantity: foundTshirt.quantity,
      id: foundTshirt.id,
    });
  } else {
    foundItem.quantity += 1;
  }
  paintCartItems();
  setInLocalStorage();
}

function listenAddButtons() {
  const productBtns = document.querySelectorAll('.js_add_product');
  for (const btn of productBtns) {
    btn.addEventListener('click', incProduct);
  }
}

//CART SECTION
function renderCartItem(product) {
  let newCartItem = '';
  newCartItem += `<tr>`;
  newCartItem += `<td>${product.name}</td>`;
  newCartItem += `<td>${product.price}</td>`;
  newCartItem += `<td>`;
  newCartItem += `<button class="js_btn_dec" data-id="${product.id}">-</button>`;
  newCartItem += `${product.quantity}`;
  newCartItem += `<button class="js_btn_inc" data-id="${product.id}">+</button>`;
  newCartItem += `</td>`;
  newCartItem += `<td>${product.price * product.quantity}</td>`;
  return newCartItem;
}

function getFinalPrice() {
  let total = 0;
  for (const product of cart) {
    total += product.price * product.quantity;
  }
  return total;
}

function renderCartTotal() {
  let total = ``;
  total += `<tr>`;
  total += `<td colspan='3'>Total</td>`;
  total += `<td>${getFinalPrice()}€</td>`;
  total += `</tr>`;
  return total;
}

function paintCartItems() {
  //Bucle clásico
  shoppingCart.innerHTML = '';

  for (let i = 0; i < cart.length; i++) {
    shoppingCart.innerHTML += renderCartItem(cart[i]);
  }
  shoppingCart.innerHTML += renderCartTotal();
  listenCartButtons();
  //Debo meter esta función de escucha aquí para completar el circulo constante de suma de cantidades
  //si pongo esta función fuera el flujo es el siguiente: se pinta la cesta, se escucha el boton, haciendo click se pinta una nueva cesta llamando de nuevo a la funcion y FIN. Aunque vuelva a hacer click ya no volverá a activarse el click.
  //Para que se active sin fin debemos: pintar la cesta, dentro de este pinta escuchamos el boton, incrementamos o decrementamos dependiendo de su if y volvemos a pintar la cesta hasta el fin de los tiempos
}

function decProduct(ev) {
  ev.preventDefault();
  const clickedId = parseInt(ev.target.dataset.id);
  let foundItem;
  for (const item of cart) {
    if (item.id === clickedId) {
      foundItem = item;
    }
  }
  if (foundItem.quantity > 1) {
    foundItem.quantity -= 1;
  } else {
    const itemIndex = cart.findIndex((item) => item.id === foundItem.id);
    cart.splice(itemIndex, 1);
  }
  paintCartItems();
  setInLocalStorage();
}

function listenCartButtons() {
  const incBtns = document.querySelectorAll('.js_btn_inc');
  const decBtns = document.querySelectorAll('.js_btn_dec');
  for (const btn of incBtns) {
    btn.addEventListener('click', incProduct); //Si aqui le aplico la misma funcion que tengo para añadir elementos nuevos al carrito es más facil porque no tengo que repetir codigo innecesario. Para ello debemos darle a los botones el mismo data-id del producto como atributo gancho.
  }
  for (const btn of decBtns) {
    btn.addEventListener('click', decProduct);
  }
  //Debo llamar aquí a los botones, despues de su creacion con la invocación de la funcion pintadora de elementos del carrito porque hasta este momento no existian pero ahora sí existen
}

function setInLocalStorage() {
  const stringifyCart = JSON.strongidy(cart);
  localStorage.setItem('cart', stringifyCart);
}

function getFromLocalStorage() {
  const localStorageCart = localStorage.getItem('cart');
  if (localStorageCart !== null) {
    //este if se debe hacer siempre para comprobar si nuestro local storage está lleno o no
    cart = JSON.parse(localStorageCart);
    paintCartItems();
  }
}

//START APP
getAPIData();
paintCartItems();
