
/*******************************************/
const swiper = new Swiper('.swiper-container', 
 {loop: true,autoplay: {delay: 3000,},
pagination: {el: '.swiper-pagination',},
navigation: {nextEl: '.swiper-button-next',prevEl: '.swiper-button-prev',},
scrollbar: {el: '.swiper-scrollbar',},});
/*******************************************/
/****************************************/
const Id  = (e) => document.getElementById(e);
/****************************************/
/****************************************/
const addClass = (e,clas) => document.querySelector(e).classList.add(clas)
/****************************************/
/****************************************/
const removeClass = (e,clas) => document.querySelector(e).classList.remove(clas)
/****************************************/
/*******************************************/
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
if (prevScrollpos > currentScrollPos) {
Id("page-header").style.top = "0";
// Id("page-header").style.borderColor = "var(--main-bg-light)";
}
else{
Id("page-header").style.top = "var(--page-header-h)";
// Id("page-header").style.borderColor = "none";
}
prevScrollpos = currentScrollPos;
};
/*******************************************/
/**************************************/
Id("hamburger-icon").addEventListener("click",function(){
addClass("body","overflow-hidden");
addClass("#mobile-sidebar ","transX");
});

Id("close-mob-sidebar").addEventListener("click",function(){
removeClass("body","overflow-hidden");
removeClass("#mobile-sidebar ","transX");
});
/*************************************/
/***************************************/
Id("search-icon").addEventListener("click",function(){
addClass("#search-content","show");
addClass("body","overflow-hidden-all");
});

Id("close-search").addEventListener("click",function(){
removeClass("#search-content","show");
removeClass("body","overflow-hidden-all");
});
/***************************************/
/***************************************/
window.oncontextmenu = function(){
   return false;
}
/***************************************/

