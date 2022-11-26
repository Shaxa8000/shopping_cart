let label = document.getElementById('label');
let shoppingCart = document.getElementById('shopping-cart');

let basket = JSON.parse(localStorage.getItem('item')) || [];

let calculation = () => {
  let cartIcon = document.getElementById('cart-amount');
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
}

calculation();

let generateCartItems = () => {
    if (basket.length !== 0) {
        return shoppingCart.innerHTML = basket.map(({id, item}) => {
            let search = shopItemsData.find((x) => x.id === id) || [];
            return `
            <div class='cart-item'>
                <img width= '100' src=${search.img}>
                <div class='details'>
                  <div class='title-price-x'>
                     <h4></h4>
                     
                  </div>
                  <div class='cart-buttons'></div>
                  <h3></h3>
                </div>
            </div>
            `
        }).join('')
    } else {
        shoppingCart.innerHTML = ``
        label.innerHTML = `
        <h2>Cart is Empty</h2>
        <a href='index.html'>
          <button class ='homeBtn'>Back to Home</button>
        </a>
        `
    }
}

generateCartItems();

