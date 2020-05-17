$(function(){
	'use strict';
	var $projects = $('.projects');
	$projects.isotope({
		itemSelector: '.item',
		layoutMode: 'fitRows'
	});

	//this part is for experience's section
	$('.chart').easyPieChart({
		size:180,
		barColor:'#000',
		trackColor:'#ddd',
		scaleColor:false,
		lineWidth:8,
		lineCap:'circle',
		animate:2000

	});
	//this part is for filter section
	$('ul.filters li').on('click', function(e){
		e.preventDefault();
		var filter = $(this).attr('data-filter');
		$('ul.filters li').removeClass('active');
		$(this).addClass('active');
		$projects.isotope({filter:filter});
	})
	$('.card').mouseenter(function(){
		$(this).find('.card-hover').css({'top':'0'});
		$(this).find('card-img-overlay').css({'top':'-100%'})
	}).mouseleave(function(){
		$(this).find('.card-hover').css({'top':'-100%'});
	})









});