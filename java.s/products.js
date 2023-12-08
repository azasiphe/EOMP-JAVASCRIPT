function Constructor(id, url, title, price) {
  (this.id = id), (this.url = url), (this.title = title), (this.price = price);
}
let product = [
  {
    id: 1,
    image: "https://i.postimg.cc/BQW5qZgH/images-31.jpg",
    title: "Mug",
    price: 120,
    quantity:0,
  },
  {
    id: 2,
    image: "https://i.postimg.cc/3RbSHzhy/download-32.jpg",
    title: "T-shirt",
    price: 450,
    quantity:0,
  },
  {
    id: 3,
    image: "https://i.postimg.cc/MGJCkfP4/IMG-20220222-WA0025-250x250.jpg",
    title: "Flask",
    price: 220,
    quantity:0,
  },
  {
    id: 4,
    image:
      "https://i.postimg.cc/T2Fr4f1L/IMG-20211119-WA0013-1024x1024-1-300x300.jpg",
    title: "Sippy Cups",
    price: 250,
    quantity:0,
  },
  {
    id: 5,
    image: "https://i.postimg.cc/mrsQTRHd/Sling-Bag.jpg",
    title: "Bag",
    price: 450,
  },
  {
    id: 6,
    image: "https://i.postimg.cc/y62ZPKYf/Scatters-Pillows-300x300.png",
    title: "Pillow Cases",
    price: 350,
    quantity:0,
  },
  {
    id: 7,
    image: "https://i.postimg.cc/P5dD94G9/Ma-beddegoed-2.png",
    title: "Bedding",
    price: 1500,
    quantity:0,
  },
  {
    id: 8,
    image: "https://i.postimg.cc/kMtB572F/IMG-20220203-WA0001-440x440.jpg",
    title: "Dribble nappy",
    price: 160,
    quantity:0,
  },
  {
    id: 9,
    image: "https://i.postimg.cc/kMtB572F/IMG-20220203-WA0001-440x440.jpg",
    title: "Socks",
    price: 150,
    quantity:0,
  },
  {
    id: 10,
    image: "https://i.postimg.cc/nrfSBHp9/Puzzle.jpg",
    title: "Puzzle",
    price: 400,
    quantity:0,
  },
  {
    id: 11,
    image: "https://i.postimg.cc/RFWxXCkP/IMG-20211116-WA0037-440x440.jpg",
    title: "Key Holder",
    price: 90,
    quantity:0,
  },
  {
    id: 12,
    image: "https://i.postimg.cc/XJbYPCg2/images-27.jpg",
    title: "Car Magnets",
    price: 1000,
    quantity:0,
  },
];


displayProducts(product);

// Search products function
function searchItems() {
  let searchTerm = document.getElementById("searchInput").value.toLowerCase();
  let filteredProducts = product.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm) ||
      item.price.toString().includes(searchTerm)
  );
  displayProducts(filteredProducts);
}

// Sort products function
function sortAlphabetically() {
  product.sort((a, b) => a.title.localeCompare(b.title));
  displayProducts(product);
}
let cart = [];

function addtocart(a) {
  // console.log(a);
  if(a){
  
      cart.push(a);
      // console.log(cart);
  
      localStorage.setItem('checkout', JSON.stringify(cart) )
    }
  
  
    // displayProducts(cart); to the admin page
  }

document.getElementById("searchInput").addEventListener("input", searchItems);
document.getElementById("sort").addEventListener("click", sortAlphabetically);

// this function is to display products
function displayProducts(products) {
  document.getElementById("root").innerHTML = products
  .map(
      (item, index) => `
      <div class='box'>
        <div class='img-box'>
          <img class='images' src=${item.image}></img>
          </div>
          <p>${item.title}</p>
          <h2>R ${item.price}.00</h2>
          <button onclick='addtocart(${JSON.stringify(item)})'>Add to cart</button>
          </div>`
          )
    .join("");

    localStorage.setItem('Products', JSON.stringify(product))
  }
  //for my live demo 
  let myModal = document.getElementById('myModal')
let myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})
function addtocart(product) {
  let existingProduct = cart.find((item) => item.id === product.id);

  if (existingProduct) {
    existingProduct.quantity++;
    existingProduct.subtotal = existingProduct.quantity * existingProduct.price;
  } else {
    let newProduct = { ...product, quantity: 1, subtotal: product.price };
    cart.push(newProduct);
  }

  localStorage.setItem('checkout', JSON.stringify(cart));
  displayInTheCheckout();
}