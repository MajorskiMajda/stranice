const products = [{
    image: './images/earrings1.png',
    name: 'GOLDEN HORIZON',
    priceCents: 19500,
    subName: 'GOLD KNOT EARRINGS'
},
{
    image: './images/silver-earrings.png',
    name: 'SILVER BLOOM',
    priceCents: 11500,
    subName: 'SILVER FLOWER EARRINGS'
},{
    image: './images/silver-earrings.png',
    name: 'SILVER GIFT',
    priceCents: 10500,
    subName: 'SILVER GIFT EARRINGS'
},
{
    image: './images/earrings1.png',
    name: 'SILVER GIFT',
    priceCents: 15500,
    subName: 'GOLD GIFT EARRINGS'
}
];

let productsHTML = '';

products.forEach((product) => {
    productsHTML += ` 
      <div class="product-container">
        <div class="earring-img-div" id="js-add-to-cart">
          <img
            class="earring-img"
            id="photo"
            onmouseover=""
            src="${product.image}"
          />
        </div>
        <div class="info-container2">
          <div class="name-container">
            <h4 class="earring-name serif-font">${product.name}</h4>
            <h4 class="price1">$${(product.priceCents /100)}</h4>
            <p class="earring-description sans-font">${product.subName}</p>
          </div>
        </div>
      </div>
    `;
 
});
// console.log(productsHTML);


document.querySelector('#js-earrings-container').innerHTML = productsHTML;
const prDiv = document.querySelectorAll('#js-add-to-cart')
 prDiv.forEach((div) => {
    div.addEventListener('click', () => {
        console.log("added product");
    });
})