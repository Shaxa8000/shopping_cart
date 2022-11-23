let shop = document.getElementById('shop');


console.log(shop);

let generateShop = () => {
    return shop.innerHTML = `
     <div class="item">
            <img width="220" src="./images/img-1.jpg" alt="item1">
            <div class="details">
                <h3>Casual shirt</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                <div class="price-quantity">
                    <h2>$ 45</h2>
                    <div class="buttons">
                        <i class="bi bi-dash-lg"></i>
                        <div class="quantity">0</div>
                        <i class="bi bi-plus-lg"></i>
                    </div>
                </div>
            </div>
        </div>
    `
}

generateShop()