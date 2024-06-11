
 $(document).ready(function(){
      $(window).bind('scroll', function() {

			 if ($(window).scrollTop( ) > 88) {
				 $(' .navbar').addClass('scroll_menu');
			 }
			 else {
			 $(' .navbar').removeClass('scroll_menu');
			 }
		});
		     $(window).load('scroll', function() {

			 if ($(window).scrollTop( ) > 88) {
				 $(' .navbar').addClass('scroll_menu');
			 }
			 else {
			 $(' .navbar').removeClass('scroll_menu');
			 }
		});
              $(window).scroll(function () {
                onScrollHandle();
          
            });
            function onScrollHandle() {
                //Navbar shrink when scroll down
 
             var currentScrollPos = $(document).scrollTop();
          

               $('#navbarCollapse > ul > li > a').each(function () {
                    var curLink = $(this);
                    var refElem = $(curLink.attr('href'));
                    //Compare the value of current position and the every section position in each scroll
                    if (refElem.position().top <= currentScrollPos && refElem.position().top + refElem.height() > currentScrollPos) {
                        //Remove class active in all nav
                        $('#navbarCollapse > ul > li').removeClass("active");
                        //Add class active
                        curLink.parent().addClass("active");
                    }
                    else {
                        curLink.parent().removeClass("active");
                    }
                });
            }
     var mixer = mixitup('#container');
	   $(window).bind('scroll', function() {

			 if ($(window).scrollTop( ) > 88) {
				 $(' .navbar').addClass('scroll_menu');
			 }
			 else {
			 $(' .navbar').removeClass('scroll_menu');
			 }
		});
	
 /* mbl nav*/
    $('.hamburger').click(function(){
        $('  .navbar-nav ').toggleClass('mbl-nav');
        
        
        
    }); 
     $('.owl-carousel').owlCarousel({
    margin:10,
    loop:true,
   
         autoplay:true,
       
         dots:true,
         loop:true,
    items:1,smartSpeed:440,
})
/* add active nav*/
     var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".navbar").style.top = "0";
  } else {
    document.querySelector(".navbar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}



 
 });