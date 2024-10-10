
const products = [{
    image: './images/earrings1.png',
    name: 'GOLDEN HORIZON',
    priceCents: 19500,
    subName: 'GOLD KNOT EARRINGS'
}
];

let productsHTML = '';

products.forEach((product) => {
    productsHTML += `
    <div class="product-img-div">
        <img class="jew-img" id="photo" onmouseover="" src="${product.image}">
    </div>
     <div class="product-details-div" >
        <div class="product-title-div">
            <h4 class="product-title serif-font">${product.name}</h4>
            <h4 class="product-price sans-font">${product.priceCents/100}</h4>
        </div>
        <div class="">
            <p class="product-sub-heading sans-font">${product.subName}</p>
        </div>
        <div>
            <button type="button" id="js-add-to-cart" class="btn sans-font btn-lg btn-block" data-product-name="${product.name}">
            ADD TO CART
            </button>
        </div>
        <div class="adittional-info-div sans-font">
            <i class="fi fi-rr-check"> </i>
            <p> 2-Year-Warranty</p>
            <i class="fi fi-rr-paper-plane"></i>
            <p>Free Shipping</p>
            <i class="fi fi-rr-time-fast"></i>
            <p>14 day return</p>
        </div>
        <!-- <div>
            <button type="button" class="btn btn-lg ">Details</button>
            <button type="button" class="btn btn-lg ">Care</button>
        </div>         -->
    </div>
    `;
});

document.querySelector('#js-product-view').innerHTML = productsHTML;

 const button = document.querySelector('#js-add-to-cart');
    button.addEventListener('click', () => {
    const productName = button.dataset.productName;

    let matchingItem;

    cart.forEach((item) => {
        if (productName === item.productName) {
            matchingItem = item;
        }
    });

    if (matchingItem) {
        matchingItem.quantity += 1;
    }
    else {
        cart.push({
            productName: productName,
            quantity: 1
        });
    }
     console.log(cart);
 })

//  prDiv.forEach((div) => {
//     div.addEventListener('click', () => {
//         console.log("added product");
//     });
// })