/*Smooth move*/
const anchors = document.querySelectorAll('a[href^="#"]');

for(let anchor of anchors) {
  anchor.addEventListener("click", function(e) {
    e.preventDefault() 
    const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body';
    document.querySelector(goto).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}

/*Slider with characters*/
$(document).ready(function(){
    $('.slider').slick({
      slidesToShow: 3,
      centerMode: true,
      variableWidth: true,
      asNavFor: ".sliderbig",
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }]
    });
    $('.sliderbig').slick({
      arrows: false,
      fade: true,
      centerMode: true,
      asNavFor: ".slider"
    });
});

/*Character Voice*/
var voice = new Audio();
document.querySelectorAll(".character__voice")[0].addEventListener("click", function(){
    voice.pause();
    voice = new Audio('sounds/tanjiroVoice.mp3');
    voice.play();
});
document.querySelectorAll(".character__voice")[1].addEventListener("click", function(){
    voice.pause();
    voice = new Audio('sounds/zenitsuVoice.mp3');
    voice.play();
});
document.querySelectorAll(".character__voice")[2].addEventListener("click", function(){
    voice.pause();
    voice = new Audio('sounds/inosukeVoice.mp3');
    voice.play();
});
document.querySelectorAll(".character__voice")[3].addEventListener("click", function(){
    voice.pause();
    voice = new Audio('sounds/nezukoVoice.mp3');
    voice.play();
});
document.querySelectorAll(".character__voice")[4].addEventListener("click", function(){
    voice.pause();
    voice = new Audio('sounds/tomiokaVoice.mp3');
    voice.play();
});
document.querySelectorAll(".character__voice")[5].addEventListener("click", function(){
  voice.pause();
  voice = new Audio('sounds/shinobuVoice.mp3');
  voice.play();
});