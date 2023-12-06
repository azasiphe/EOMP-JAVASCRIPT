
function Constructor(id, url, name, price){
this.id=id,
this.url=url,
this.name=name,
this.price=price

}  
let items =[]; 
let item =new Constructor(1, "https://i.postimg.cc/BQW5qZgH/images-31.jpg", 'Mug', 150);
let item2 =new Constructor(2, "https://i.postimg.cc/3RbSHzhy/download-32.jpg", 'T-shirt', 450);
let item3 =new Constructor(3, "https://i.postimg.cc/MGJCkfP4/IMG-20220222-WA0025-250x250.jpg", 'Flask', 200);
let item4 =new Constructor(4, "https://i.postimg.cc/T2Fr4f1L/IMG-20211119-WA0013-1024x1024-1-300x300.jpg", 'Sippy Cups', 250);

let item5 =new Constructor(5, "https://i.postimg.cc/mrsQTRHd/Sling-Bag.jpg", 'Bag', 450);
let item6 =new Constructor(6, "https://i.postimg.cc/y62ZPKYf/Scatters-Pillows-300x300.png", 'Pillow Cases', 350);
let item7 =new Constructor(7, "https://i.postimg.cc/P5dD94G9/Ma-beddegoed-2.png", 'Bedding', 500- 1500);
let item8 =new Constructor(8, "https://i.postimg.cc/kMtB572F/IMG-20220203-WA0001-440x440.jpg", 'Dribble nappy', 160);

let item9 =new Constructor(9, "https://i.postimg.cc/kMtB572F/IMG-20220203-WA0001-440x440.jpg" , 'Socks', 150);
let item10 =new Constructor(10, "https://i.postimg.cc/nrfSBHp9/Puzzle.jpg", 'Puzzle', 400);
let item11 =new Constructor(11, "https://i.postimg.cc/RFWxXCkP/IMG-20211116-WA0037-440x440.jpg", 'Key Holder',90);
let item12 =new Constructor(12, "https://i.postimg.cc/XJbYPCg2/images-27.jpg", 'Car Magnets', 450-1000);
items.push(item,item2,item3,item4,item5,item6,item7,item8,item9,item10,item11,item12);


localStorage.setItem('items', JSON.stringify(items));

function remove(position){
    items.splice(position,1);
    favourite();
    aza();
}
items=JSON.parse(localStorage.getItem('items'));

let table=document.querySelector('#productDisplay');
function aza(){
      let products = items.map(function(item,index){

console.log(item);
console.log(index);
let itemClass = 'article item-' + item.id;

return`

<article class="${itemClass}">

<td>

<img src="${item.url}" >

<p>${item.name}</p>
<p>R${item.price}</p>
<button value="${item.price}" onclick="AddToCart(${item.id})">AddToCart</button>
<button class="Delete" value="${index}" onclick="removeItem(${item.id}">Remove</button>

<td>
</article>



`;
});
let productTable = document.getElementById('productTable');


table.innerHTML=products.join('');

}
aza();
function favourite(){
    localStorage.setItem('items',JSON.stringify(items));
    items = JSON.parse(localStorage.getItem('items'));
}
function AddToCart(itemId){
    console.log(`Item ${itemId} added to cart`);
}
function removeItem(itemId){
    console.log(`Item ${itemId} removed from cart`);
    aza();
}
table.addEventListener('click',function(event)
{
    if(event.target.classList.contains('Delete')){
        remove(event.target.value);
    }
});
//am making a function for my sort and price button //
function sortItem (){
let sortSelect = document.getElementById('sortSelect');
let sortBy = sortSelect.value ;

if (sortBy=== 'name'){
    item.sort((a,b) =>a.name.localCompare(b.name));}
    else if (sortBy=== 'price'){
    items.sort((a,b) => a.price - b.price);
}
aza();
}
function searchItems(){
    let searchInput = document.getElementById('searchInput');
    let searchTerm = searchInput.value.toLowerCase();
    let fiteredItems = items.filter(item=> item.name.toLowerCase().include(searchTerm));
    items= fiteredItems;
    aza();
}
aza();
