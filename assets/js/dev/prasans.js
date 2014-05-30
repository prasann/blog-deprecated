$(document).ready(function() {      
	var myElement = document.querySelector(".navbar-fixed-top");
	var headroom  = new Headroom(myElement);
	headroom.init();

	if(!$('html').hasClass('old_browser')){
		var $container = $('#container');
		if($container.length >0){
			$container.masonry({
			  columnWidth: 0,
			  itemSelector: '.item'
			});
		}
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