let productsInCart = [];
const addToCartButton = document.getElementById('id1');
function addToCart(product) {
    
  productsInCart.push(product);
  
  //console.log(`Produkt ${product.name} byl přidán do košíku.`);
}

function showCart(){
	var cart = document.getElementById("cart");	
	cart.innerHTML = productsInCart[0];
	console.log(productsInCart) 
}
/*
addToCartButton.addEventListener('click', function() {
  const product = {
    name: 'product', 
    price: 6.699,
  };    
  addToCart(product);   
});
*/
