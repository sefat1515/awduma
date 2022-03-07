// search bar start
'use strict';
const model = document.querySelector('.search_mobile');
const btnCloseModel = document.querySelector('.close_btn');
const btnShowModel = document.querySelectorAll('.submit_btn2');

const openModel = function () {
  // console.log('hello button');
  model.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModel = function () {
  model.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnShowModel.length; i++)
  btnShowModel[i].addEventListener('click', openModel);

btnCloseModel.addEventListener('click', closeModel);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !model.classList.contains('hidden')) {
    closeModel();
  }
});
// search bar end

// find part start

const findModel = document.querySelector('.find_modal');
const findBtnCloseModel = document.querySelector('.find_close');
const findBtnShowModel = document.querySelectorAll('.find_show');

const openFind = function () {
  // console.log('hello button');
  findModel.classList.remove('find_hidden');
  overlay.classList.remove('find_hidden');
};
const closeFind = function () {
  findModel.classList.add('find_hidden');
  overlay.classList.add('find_hidden');
};

for (let i = 0; i < findBtnShowModel.length; i++)
  findBtnShowModel[i].addEventListener('click', openFind);

findBtnCloseModel.addEventListener('click', closeFind);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !findModel.classList.contains('find_hidden')) {
    closeModel();
  }
});
// find part end

// zip part start
const zipModel = document.querySelector('.zip_modal');
const zipBtnCloseModel = document.querySelector('.zip_close');
const zipBtnShowModel = document.querySelectorAll('.zip_show');


const openZip = function () {
  // console.log('hello button');
  zipModel.classList.remove('find_hidden');
  
};
const closeZip = function () {
  zipModel.classList.add('find_hidden');
  
};

for (let i = 0; i < zipBtnShowModel.length; i++)
  zipBtnShowModel[i].addEventListener('click', openZip);

zipBtnCloseModel.addEventListener('click', closeZip);


document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !zipModel.classList.contains('find_hidden')) {
    closeModel();
  }
});
// zip part end

// popup part start
const popupModel = document.querySelector('.find_popup_js');
const popupBtnCloseModel = document.querySelector('.popup_close_js');
const popupOverlay = document.querySelector('.popup_overlay_js');
const popupBtnShowModel = document.querySelectorAll('.popup_show_js');

const popupOpenModel = function () {
  // console.log('hello button');
  popupModel.classList.remove('find_hidden');
  popupOverlay.classList.remove('find_hidden');
};
const popupCloseModel = function () {
  popupModel.classList.add('find_hidden');
  popupOverlay.classList.add('find_hidden');
};

for (let i = 0; i < popupBtnShowModel.length; i++)
  popupBtnShowModel[i].addEventListener('click', popupOpenModel);

popupBtnCloseModel.addEventListener('click', popupCloseModel);
popupOverlay.addEventListener('click', popupCloseModel);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !popupModel.classList.contains('find_hidden')) {
    closeModel();
  }
});
// popup part end


$(document).ready(function(){

  // slider part start

$( ".slider_click" ).click(function() {
  $( ".slider_full_pop" ).fadeIn( "slow", function() {
  });
});

$( ".slider_close" ).click(function() {
  $( ".slider_full_pop" ).fadeOut( "slow", function() {
  });
});

// slider part end

// sticky header start
$(window).scroll(function () {
        var scrolling = $(this).scrollTop();
        var sticky = $('.sticky_menu');

        
    });
// sticky header end

// owl carousle part start 

var owl = $('.owl-carousel');
owl.owlCarousel({
    items:3,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsiveRefreshRate:true,
    responsive: {
      0: {
        items: 1
      },
      320: {
        items: 1
      },
      470: {
        items: 2
      },
      767: {
        items: 2
      },
      900: {
        items: 3
      },
      1900: {
        items: 3
      },
    }
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})
// owl carousle part end 

// dropdown menu start
$('.fade_toggle').click(function(){

  $('#drop_one').fadeToggle(500);

});

$('.fade_toggle2').click(function(){

  $('#drop_two').fadeToggle(500);

});
$('.fade_toggle3').click(function(){

  $('#drop_three').fadeToggle(500);

});
$('.fade_toggle4').click(function(){

  $('#drop_four').fadeToggle(500);

});
$('.fade_toggle5').click(function(){

  $('#drop_five').fadeToggle(500);

});
$('.fade_toggle6').click(function(){

  $('#drop_six').fadeToggle(500);

});

$( "main" ).click(function() {
  $( ".drop_box" ).fadeOut( "slow", function() {
  });
});
// dropdown menu end

// explore menu start
$('.drop_explore').click(function(){

  $('.drop_box').fadeToggle(500);

});
// explore menu end



});


