//Elements to render
const productsEl = document.querySelector(".products");
const cartItemsEl = document.querySelector(".cart-items");
const totalPriceEl = document.querySelector(".total-price");
const subtotalEl = document.querySelector(".subtotal");
const tipEl = document.querySelector(".tip");
const totalItemsEl = document.querySelector(".total-items");
const changeEl = document.querySelector(".change");

//Function - Render Products
function renderProducts() {
    products.forEach((product) => {    
        productsEl.innerHTML += `
        <div class="row main align-items-center">

            <div class="col">
                <img class="img-fluid" src="${product.imgSrc}" alt="${product.name}">
            </div>

            <div class="col"> 
                <a href="#" class="add-to-cart" onClick="addToCart(${product.id})"> 
                    <i class="fas fa-plus"></i>
                </a>
            </div>

            <div class="col">
                <div class="row ${product.category}">${product.category}</div>
                <div class="row">${product.name}</div>
            </div>

            <div class="col">
                &euro; ${product.price}
            </div>

            
        </div>
        `;
    });
};
renderProducts();




//cart array
let cart = [];

//Function to add item to cart
function addToCart (id){
    if (cart.some((item) => item.id === id)) {
        changeNumberOfUnits('plus', id);
    
    } else {
        const item = products.find((product) => product.id === id);
        cart.push({
          ...item,
          numberOfUnits: 1,
        });
      }
    
      updateCart();
}

//Update cart
function updateCart(){
    renderCartItems();
    renderSubtotal();
}

let totalPrice = 0;
//Calculate and render subtotal, tip, total price and total items
function renderSubtotal(){
    let totalItems = 0;
    let subtotal = 0;
    let tip = 0;

    cart.forEach((item) => {
        subtotal += (item.price * item.numberOfUnits);
        totalItems += item.numberOfUnits;
        tip = (subtotal*0.1).toFixed(2);
    });
    totalPrice = subtotal*1.1;
    subtotalEl.innerHTML = `${subtotal.toFixed(2)}`;
    tipEl.innerHTML = `${tip}`;
    totalItemsEl.innerHTML = ` ${totalItems}`;
    totalPriceEl.innerHTML = `&euro; ${totalPrice.toFixed(2)}`;
}

//Function to render cart items
function renderCartItems(){
    cartItemsEl.innerHTML = ""; 
    cart.forEach((item) => {
        cartItemsEl.innerHTML += `
        <div class ="cart-item row pb-2">
        
            <div class="col ps-1"><a href="#" onClick="removeItemFromCart(${item.id})"><i class="fas fa-trash-alt pe-1"></i></a>${item.name}</div>
            <div class="col ">${item.price}</div>
            <div class="col pe-0">
                <div class="col">
                    <a href="#" onclick="changeNumberOfUnits('minus', ${item.id})"><i class="fas fa-minus px-0"></i></a>
                    ${item.numberOfUnits}
                    <a href="#" onclick="changeNumberOfUnits('plus', ${item.id})"><i class="fas fa-plus px-0"></i></a>
                </div>
            </div>
        </div>
        `;
    });
}

//Remove item from cart
function removeItemFromCart(id){
    cart = cart.filter((item) => item.id !== id);
    updateCart();
}

//Change number of units for an item
function changeNumberOfUnits(operator, id){
    cart = cart.map((item) => {
        let numberOfUnits = item.numberOfUnits;
        if (item.id === id){
            if(operator === "plus"){
                numberOfUnits++;
            } else if (operator === "minus" && numberOfUnits > 1){
                numberOfUnits--;
            }
        }
        return {
            ...item,
            numberOfUnits,
        };
    })
    updateCart();
}

//Function calculate change
function change() {
    const cashReceived = document.getElementById("cash-received").value;
    let change = cashReceived - totalPrice;
    changeEl.innerHTML += ` ${change.toFixed(2)}`
  };


//insert date and time
const dt = new Date();
const time = new Date();
document.getElementById("date").innerHTML = (("0"+dt.getDate()).slice(-2)) +"."+ (("0"+(dt.getMonth()+1)).slice(-2)) +"."+ (dt.getFullYear());
document.getElementById("time").innerHTML = (("0"+time.getHours()).slice(-2)) +":"+ (("0"+time.getMinutes()).slice(-2));