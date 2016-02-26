(function ($, root, undefined) {
	
	$(function () {
		
		'use strict';
		
		// Navbar function

		$(function(){
		    $('.navbar-toggle, nav').click(function(){
		        $('.navbar-toggle').toggleClass('navbar-on');
		        $('nav').fadeToggle(300);
		        $('nav').removeClass('nav-hide');
		    });
		});
		
	});
	
})(jQuery, this);
