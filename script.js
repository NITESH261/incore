/* ================= HERO SLIDER ================= */

const slides = document.querySelectorAll(".slide");
const dotsContainer = document.querySelector(".dots");

let index = 0;


/* CREATE DOTS */

slides.forEach((_, i) => {

const dot = document.createElement("span");

dot.classList.add("dot");

if(i === 0) dot.classList.add("active");

dot.addEventListener("click", () => {

index = i;

showSlide(index);

});

dotsContainer.appendChild(dot);

});


const dots = document.querySelectorAll(".dot");


/* SHOW SLIDE FUNCTION */

function showSlide(i){

slides.forEach(slide => slide.classList.remove("active"));

dots.forEach(dot => dot.classList.remove("active"));

slides[i].classList.add("active");

dots[i].classList.add("active");

}


/* AUTO SLIDER */

setInterval(() => {

index++;

if(index >= slides.length){

index = 0;

}

showSlide(index);

}, 5000);


/* ===============================
STICKY HEADER ON SCROLL
=============================== */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

if(window.scrollY > 80){

header.classList.add("scrolled");

}else{

header.classList.remove("scrolled");

}

});


/* ===============================
MOBILE HAMBURGER MENU
=============================== */

const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {

menu.classList.toggle("active");

});


/* ===============================
MOBILE DROPDOWN TOGGLE
=============================== */

const dropdown = document.querySelector(".dropdown");

dropdown.addEventListener("click", () => {

if(window.innerWidth < 900){

dropdown.classList.toggle("active");

}

});













/* ================= SERVICES AUTO SLIDER ================= */

const servicesTrack = document.querySelector(".services-track");
const nextBtn = document.querySelector(".services-arrow.next");
const prevBtn = document.querySelector(".services-arrow.prev");

let autoScroll;


/* AUTO ROTATE FUNCTION */

function startAutoScroll(){

autoScroll = setInterval(()=>{

servicesTrack.scrollBy({
left:320,
behavior:"smooth"
});

/* LOOP RESET */

if(
servicesTrack.scrollLeft + servicesTrack.clientWidth
>= servicesTrack.scrollWidth - 10
){
servicesTrack.scrollTo({
left:0,
behavior:"smooth"
});
}

},3000);

}


/* STOP ON HOVER */

servicesTrack.addEventListener("mouseenter",()=>{
clearInterval(autoScroll);
});

servicesTrack.addEventListener("mouseleave",()=>{
startAutoScroll();
});


/* MANUAL BUTTONS */

nextBtn.addEventListener("click",()=>{

servicesTrack.scrollBy({
left:320,
behavior:"smooth"
});

});

prevBtn.addEventListener("click",()=>{

servicesTrack.scrollBy({
left:-320,
behavior:"smooth"
});

});


/* TOUCH MOBILE SWIPE SUPPORT */

let isDown=false;
let startX;
let scrollLeft;

servicesTrack.addEventListener("mousedown",(e)=>{
isDown=true;
startX=e.pageX - servicesTrack.offsetLeft;
scrollLeft=servicesTrack.scrollLeft;
});

servicesTrack.addEventListener("mouseleave",()=>{
isDown=false;
});

servicesTrack.addEventListener("mouseup",()=>{
isDown=false;
});

servicesTrack.addEventListener("mousemove",(e)=>{
if(!isDown) return;
e.preventDefault();

const x=e.pageX - servicesTrack.offsetLeft;
const walk=(x-startX)*2;

servicesTrack.scrollLeft=scrollLeft-walk;
});


/* START AUTO ROTATE */

startAutoScroll();







/* ================= TESTIMONIAL SLIDER ================= */

const reviewsTrack = document.querySelector(".reviews-track");
const reviewNext = document.querySelector(".review-next");
const reviewPrev = document.querySelector(".review-prev");

function getReviewScrollAmount(){
return reviewsTrack.querySelector(".review-card").offsetWidth + 30;
}


/* MANUAL NAVIGATION */

reviewNext.addEventListener("click",()=>{

reviewsTrack.scrollBy({
left:getReviewScrollAmount(),
behavior:"smooth"
});

});

reviewPrev.addEventListener("click",()=>{

reviewsTrack.scrollBy({
left:-getReviewScrollAmount(),
behavior:"smooth"
});

});


/* AUTO ROTATE */

let reviewAutoScroll = setInterval(()=>{

reviewsTrack.scrollBy({
left:getReviewScrollAmount(),
behavior:"smooth"
});

if(
reviewsTrack.scrollLeft + reviewsTrack.clientWidth
>= reviewsTrack.scrollWidth - 10
){
reviewsTrack.scrollTo({
left:0,
behavior:"smooth"
});
}

},4000);


/* PAUSE ON HOVER */

reviewsTrack.addEventListener("mouseenter",()=>{
clearInterval(reviewAutoScroll);
});

reviewsTrack.addEventListener("mouseleave",()=>{

reviewAutoScroll = setInterval(()=>{

reviewsTrack.scrollBy({
left:getReviewScrollAmount(),
behavior:"smooth"
});

if(
reviewsTrack.scrollLeft + reviewsTrack.clientWidth
>= reviewsTrack.scrollWidth - 10
){
reviewsTrack.scrollTo({
left:0,
behavior:"smooth"
});
}

},4000);

});




/* POPUP AUTO OPEN AFTER 5 SECONDS */

window.addEventListener("load",()=>{

setTimeout(()=>{

document
.getElementById("popupOverlay")
.classList.add("active");

},5000);

});


/* OPEN POPUP MANUALLY */

function openPopup(){

document
.getElementById("popupOverlay")
.classList.add("active");

}


/* CLOSE POPUP */

function closePopup(){

document
.getElementById("popupOverlay")
.classList.remove("active");

}