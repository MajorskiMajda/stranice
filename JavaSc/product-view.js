
const products = [{
    image: './images/earrings1.png',
    name: 'GOLDEN HORIZONttt',
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
            <button type="button" id="js-add-to-cart" data-product-name="" class="btn sans-font btn-lg btn-block">ADD TO CART</button>
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
console.log(productsHTML);

document.querySelector('#js-product-view').innerHTML = productsHTML;

console.log(productsHTML);

 const button = document.querySelector('#js-add-to-cart');
 button.addEventListener('click', () => {
   console.log("mm")
 })

//  prDiv.forEach((div) => {
//     div.addEventListener('click', () => {
//         console.log("added product");
//     });
// })