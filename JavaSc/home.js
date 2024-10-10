$.get("nav.html", function(data){
    $("#nav-placeholder").replaceWith(data);
});
$.get("footer.html", function(data){
    $("#footer-div").replaceWith(data);
});

function loadSilverPage()
{
     window.location="silver-page.html";
}
function loadGoldPage()
{
     window.location="gold-page.html";
}
function loadTrackingPage()
{
     window.location="tracking.html";
}
const swiper = new Swiper('.swiper', {
     direction: 'horizontal',
     slidesPerView: 3,
     spaceBetween: 30,
     loop: true,
     pagination: {
       el: '.swiper-pagination',
     },
     navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
     },
     scrollbar: {
       el: '.swiper-scrollbar',
     },
    //  autoplay: {
    //   delay: 2000,
    //  },
     breakpoints: {
       200: {
         slidesPerView: 1,
         spaceBetween: 10,
         edgeSwipeDetection: true
       },
       480: {
         slidesPerView: 2,
         spaceBetween: 20,
         edgeSwipeDetection: true
       },
       640: {
         slidesPerView: 3,
         spaceBetween: 30
       }
     }
   });