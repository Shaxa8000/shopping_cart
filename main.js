let shop = document.getElementById('shop');

let shopItemsData = [
  {
    id: "jfhgbvnscs",
    name: "Casual Shirt",
    price: 45,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "images/img-1.jpg",
  },
  {
    id: "ioytrhndcv",
    name: "Office Shirt",
    price: 100,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "images/img-2.jpg",
  },
  {
    id: "wuefbncxbsn",
    name: "T Shirt",
    price: 25,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "images/img-3.jpg",
  },
  {
    id: "thyfhcbcv",
    name: "Mens Suit",
    price: 300,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "images/img-4.jpg",
  },
];

let basket = [];

let generateShop = () => {
    return (shop.innerHTML = shopItemsData.map(({id, name, price, desc, img}) => {
        return ( `
     <div id=product-id-${id} class="item">
            <img width="220" src=${img} alt="item1">
            <div class="details">
                <h3>${name}</h3>
                <p>${desc}</p>
                <div class="price-quantity">
                    <h2>$ ${price}</h2>
                    <div class="buttons">
                        <i onclick='decrement(${id})' class="bi bi-dash-lg"></i>
                        <div id=${id} class="quantity">0</div>
                        <i onclick='increment(${id})' class="bi bi-plus-lg"></i>
                    </div>
                </div>
            </div>
        </div>
    ` )
    }).join('')
    )
}

generateShop();

let increment = (id) => {
    let selectedItem = id;
    console.log(selectedItem.id);
};

let decrement = (id) => {
   let selectedItem = id;
   console.log(selectedItem.id);
};

let update = () => {
    
};






