$(function () {
	// body...
	'use strict';
	var windowheight = $(window).height(),
	    upperheight = $('.Upper-bar').innerHeight(),
	    navbarheight = $('navbar').innerHeight();
	$('.slider').height(windowheight - (  upperheight + navbarheight ));


//Souffle images

$('.Featured-work ul li').on('click',function(){
  $(this).addclass('active').siblings().removeClass('active');

});

});

// Show hidden items 

$('.show-more').click(function () {

   $('.our-work .hidden').fadeIn();

});
