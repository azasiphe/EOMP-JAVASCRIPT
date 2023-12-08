function edit(item) {

    let newTitle = prompt("Enter new title:", item.title);
    let newPrice = prompt("Enter new price:", item.price);
  
    
    item.title = newTitle || item.title; 
    item.price = parseFloat(newPrice) || item.price; 
  
    displayProducts(product);
  }