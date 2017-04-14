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
	})
});