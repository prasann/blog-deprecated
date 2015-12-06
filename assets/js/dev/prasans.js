$(document).ready(function() {
	
	if($('.navbar-fixed-top').length > 0){
		var myElement = document.querySelector(".navbar-fixed-top");
		var headroom  = new Headroom(myElement);
		headroom.init(); 
	}      

	$('#images').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1]
		}
    });
    $('#image').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1]
        }
    });
    prettyPrint();
    
 });