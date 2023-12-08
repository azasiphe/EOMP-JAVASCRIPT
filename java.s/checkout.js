//setting that  when product add cart it should dislay on checkout
let cart = JSON.parse(localStorage.getItem('checkout')) ||[];
let adminOutput = document.querySelector('.display-item')
function displayInTheCheckout(){
    
    console.log(cart);

    cart.forEach( item => {
        console.log(item.title);
        adminOutput.innerHTML += 
        `<tr>
          <div class='box' style="dispaly-grid">
          <div class='img-box'>
            <img class='images' src= ${item.image}></img>
            <p>  ${item.title}</p>
          </div>
          <h2>  R ${item.price}.00</h2>
           
            </div>
        </tr>`
    })
}

displayInTheCheckout()