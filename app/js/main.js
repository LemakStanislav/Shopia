//MainSlider

$(function () {

    var slider = $('.main .main-slides');
    var sliderItems = $('.main .main-slides-item');
   // var slidesTXT = $('.header .header-slides-text-item');
    var total = sliderItems.length;
    var current = 0;
    var prev = $('.slider-prev');
    var next = $('.slider-next');
    var duration = 5000;
    var interval;
    var bulletsContainer = slider.find('.slider-bullets');
   // var buletImg=$('.border-bullet-img');

    for(var i=0; i<total; i++){
        bulletsContainer.append('<li></li>');
    }
    var bullets = bulletsContainer.find('li');

    sliderItems.eq(current).addClass('active').css({display: 'block'});
  // slidesTXT .eq(current).addClass('active').css({display: 'flex'});
    bullets.eq(current).addClass('slider-bullet-active');
    bullets.map(function(){
        $(this).click(function(){
            current = $(this).index();
            changeSlide();
        });});
  /*
    var angle = 0;
    next.on("click", function(e) {
        e.preventDefault();
     /*   angle+=72;
        $(buletImg).rotate(angle);*/
       /* current++;
        if(current === total) {
            current = 0;
        }
        changeSlide();
    });
    prev.on("click", function(e) {
        e.preventDefault();
      /*  angle-=72;
        $(buletImg).rotate(angle);*//*
        current--;
        if(current === -1) {
            current = total-1;
        }
        changeSlide();
    });*/


    function autoPlay(){

        current++;
        if(current === total) {
            current = 0;
        }
        changeSlide();

    }
    interval = setInterval(autoPlay, duration);

    function changeSlide(){
        sliderItems.filter(':visible').stop().fadeOut(0).removeClass('active');
        sliderItems.eq(current).stop().fadeIn(300).addClass('active').css({display: 'block'});
        bullets.filter('.slider-bullet-active').removeClass('slider-bullet-active');
        bullets.eq(current).addClass('slider-bullet-active');
        /*slidesTXT.filter(':visible').stop().fadeOut(500).removeClass('active');
        slidesTXT.eq(current).stop().fadeIn(500).addClass('active').css({display: 'flex'});
        //buletImg.addClass('rotate');*/
        clearInterval(interval);
        interval = setInterval(autoPlay, duration);
    }

});

//Canvas

$(function () {

    var right = document.getElementById("support-canvas-right");
    var mid = document.getElementById("support-canvas-mid");
    var left = document.getElementById("support-canvas-left");
    var ctx = right.getContext('2d');
    var ctx1 = mid.getContext('2d');
    var ctx2 = left.getContext('2d');


    //ctx.fillRect(0, 0, example.width, example.height);
    /*ctx.beginPath();
    ctx.rect(-16, 0, 32, 100);
    ctx.fill();
    ctx.closePath();*/


    $('#support-canvas-right').on("click", function(e) {
        e.preventDefault();
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.rect(-16, 0, 64, 180);
        ctx.fill();
        ctx.closePath();
        ctx1.fillStyle = 'white';
        ctx1.beginPath();
        ctx1.rect(-16, 0, 64, 180);
        ctx1.fill();
        ctx1.closePath();

    });
    $('#support-canvas-mid').on("click", function(e) {
        e.preventDefault();
        ctx.fillStyle = 'red';
        ctx.beginPath();
        ctx.rect(-16, 0, 32, 180);
        ctx.fill();
        ctx.closePath();
        ctx1.fillStyle = 'red';
        ctx1.beginPath();
        ctx1.rect(-16, 0, 32, 180);
        ctx1.fill();
        ctx1.closePath();

    });

});

// Cart button toggle
$(function () {

    var cartbtn = $(".add-to-crt-btn");


    cartbtn.click(function () {

        $(this).toggleClass("active-btn");

    });


});

// Masonry
/*
$(function () {
$('.grid').masonry({
    itemSelector: '.grid-item'
});
});*/



//Owl-carousel
$(document).ready(function(){
    $('.owl-carousel').owlCarousel();
});