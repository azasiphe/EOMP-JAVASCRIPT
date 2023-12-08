//setting that  when product add cart it should dislay on checkout
let cart = JSON.parse(localStorage.getItem('checkout')) ||[];
let adminOutput = document.querySelector('.display-item')
function displayInTheCheckout(){
    
    console.log(cart);

    cart.forEach( item => {
        console.log(item.title);
        adminOutput.innerHTML += 
        `
        <div class='box' style="dispaly-grid">
          <div class='img-box'>
            <img class='images' src= ${item.image}></img>
            </div>
            <p>  ${item.title}</p>
            <h2>  R ${item.price}.00</h2>
           
            </div>`
    })
}

displayInTheCheckout()