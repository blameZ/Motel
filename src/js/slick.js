$('.team-carousel').slick({
	slidesToShow: 1,
	mobileFirst: true,
	// autoplay: true,
	slidesToScroll: 1,
	arrows: false,
	responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
			},
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
			},
		},
	],
})
