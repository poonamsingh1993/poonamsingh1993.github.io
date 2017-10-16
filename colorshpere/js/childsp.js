
 function collapseNavbar(){
 	if($(".navbar").offset().top>50){
 		$(".navbar-fixed-top").addClass("top-nav-collapse");
 	}
 	else{$(".navbar-fixed-top").removeClass("top-nav-collapse");
 	}}

 	$(window).scroll(collapseNavbar);
 	$(document).ready(collapseNavbar);
 	$('.navbar-collapse ul li a').click(function(){
 		$(".navbar-collapse").collapse('hide');
 	});
  $("a").on('click', function(event) {
 	 	if(this.hash!=''){
 	 		console.log(this.hash);
 	 	var hash = this.hash;
     $('html, body').animate({
        scrollTop: $(this.hash).offset().top
      }, 400, function(){
        window.location.hash = hash;
      });
 	}
  });
  