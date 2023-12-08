



function Constructor(id, url, title, price) {
  (this.id = id), (this.url = url), (this.title = title), (this.price = price);
}
let product = [
  {
    id: 1,
    image: "https://i.postimg.cc/BQW5qZgH/images-31.jpg",
    title: "Mug",
    price: 120,
  },
  {
    id: 2,
    image: "https://i.postimg.cc/3RbSHzhy/download-32.jpg",
    title: "T-shirt",
    price: 450,
  },
  {
    id: 3,
    image: "https://i.postimg.cc/MGJCkfP4/IMG-20220222-WA0025-250x250.jpg",
    title: "Flask",
    price: 220,
  },
  {
    id: 4,
    image:
      "https://i.postimg.cc/T2Fr4f1L/IMG-20211119-WA0013-1024x1024-1-300x300.jpg",
    title: "Sippy Cups",
    price: 250,
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
  },
  {
    id: 7,
    image: "https://i.postimg.cc/P5dD94G9/Ma-beddegoed-2.png",
    title: "Bedding",
    price: 1500,
  },
  {
    id: 8,
    image: "https://i.postimg.cc/kMtB572F/IMG-20220203-WA0001-440x440.jpg",
    title: "Dribble nappy",
    price: 160,
  },
  {
    id: 9,
    image: "https://i.postimg.cc/J7QspkCg/057f05ea432a951c66db507afb33a23e-300x300.jpg",
    title: "Socks",
    price: 150,
  },
  {
    id: 10,
    image: "https://i.postimg.cc/nrfSBHp9/Puzzle.jpg",
    title: "Puzzle",
    price: 400,
  },
  {
    id: 11,
    image: "https://i.postimg.cc/RFWxXCkP/IMG-20211116-WA0037-440x440.jpg",
    title: "Key Holder",
    price: 90,
  },
  {
    id: 12,
    image: "https://i.postimg.cc/XJbYPCg2/images-27.jpg",
    title: "Car Magnets",
    price: 1000,
  },
];


displayProducts(product);


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
          <button onclick='edit(${JSON.stringify(item)})'>EDIT</button>
          <button onclick='remove(${JSON.stringify(item)})'>Remove</button>
          </div>`
          )
    .join("");

    localStorage.setItem('Products', JSON.stringify(product))
  }

 //function to remove 

 function remove(item) {
   
  let index = product.findIndex((p) => p.id === item.id);

  
  product.splice(index, 1);

  displayProducts(product);
}
 // edit funtionfunction edit(item) {
  function edit(item) {  
    let newImage = prompt("Enter new imageUrl:", item.image);
    let newTitle = prompt("Enter new title:", item.title);
    let newPrice = prompt("Enter new price:", item.price);
  
  
    
    item.title = newTitle || item.title; 
    item.price = parseFloat(newPrice) || item.price; 
  
    displayProducts(product);
  }
  //.
  // Function to display products in a table
function displayProducts(products) {
  const tableHeader = `
    <thead>
      <tr>
        <th>ID</th>
        <th>Image</th>
        <th>Title</th>
        <th>Price</th>
        <th>Edit</th>
        <th>Remove</th>
      </tr>
    </thead>
  `;

  const tableBody = products
    .map(
      (item) => `
        <tr>
          <td class="w-40">${item.id}</td>
          <td ><img class='product-image' src=${item.image} alt="${item.title}"></td>
          <td>${item.title}</td>
          <td>R ${item.price}.00</td>
          <td><button onclick='edit(${JSON.stringify(item)})'>EDIT</button></td>
          <td><button onclick='remove(${JSON.stringify(item)})'>REMOVE</button></td>
        </tr>`
    )
    .join("");

  document.getElementById("root").innerHTML = `
    <table class="product-table">
      ${tableHeader}
      <tbody>
        ${tableBody}
      </tbody>
    </table>
  `;

  // Store the products in local storage
  localStorage.setItem('Products', JSON.stringify(product));
}

displayProducts(product);

