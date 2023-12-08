//setting that  when product add cart it should dislay on checkout
let cart = JSON.parse(localStorage.getItem('checkout')) || [];
let checkoutTableBody = document.getElementById('checkoutTableBody');

function displayInTheCheckout() {
    

    cart.forEach((item) => {
        checkoutTableBody.innerHTML += 
        
        `
        <tr>
            
            <td>${item.title}
</td>            <td>R ${item.price}.00</td>
            <td>${item.quantity}</td>
            <td>R ${item.subtotal}.00</td>
        </tr>`;
    });
}

displayInTheCheckout();
function displayInTheCheckout() {
  checkoutTableBody.innerHTML = '';

  cart.forEach((item) => {
      checkoutTableBody.innerHTML += `
      <tr>
          <td>${item.title}</td>
          <td>R ${item.price}.00</td>
          <td>${item.quantity}</td>
          <td>R ${item.subtotal}.00</td>
      </tr>`;
  });

  updateTotal();
}

function updateTotal() {
let totalAmount = document.getElementById('totalAmount');
let total = cart.reduce((acc, item) => acc + item.subtotal, 0).toFixed(2);
totalAmount.innerText = `R ${total}`;
}
