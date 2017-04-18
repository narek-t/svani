$(document).ready(function() {
	$('.cat__slider').each(function(){
		var catSlider = $(this);
		catSlider.slick({
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 4,
			dots: true,
			prevArrow: catSlider.parents('.large-container').find('.arr-l'),
			nextArrow: catSlider.parents('.large-container').find('.arr-r')
		});
	});
	$('.tab-heading').click(function(event) {
		event.preventDefault();
		$(this).parents('.tags__wrapper').find('a').removeClass('active');
		$(this).addClass('active');
		var index = $(this).index();
		$(this).parents('.cat-section').find('.large-container').removeClass('active');
		$(this).parents('.cat-section').find('.lc-wrapper .large-container').eq(index).addClass('active');
		$(this).parents('.cat-section').find('.lc-wrapper .large-container').find('.cat__slider').slick('setPosition');
	});
});


