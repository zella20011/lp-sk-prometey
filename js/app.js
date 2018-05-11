$(document).ready(function() {
	$('.special #phone').inputmask({"mask": "+7(999) 999-9999"});
	$('.question #phone').inputmask({"mask": "+7(999) 999-9999"});
	$('.order-form #phone').inputmask({"mask": "+7(999) 999-9999"});

	$('.owl-carousel').owlCarousel({
      loop:true,
      responsiveClass:true,
      singleItem:true,
      navigation : true, 
          slideSpeed : 300,
          margin: 15,
  })

	$(document).on('click','.photo-mini ul li img',function(){
			self = $(this);
			self.closest('.left').children('img').attr('src', self.attr('src'));
			self.closest('.photo-mini').find('li').removeClass('active');
			self.closest('li').addClass('active');
	});

	$('.modal').click( function(event){ 
		event.preventDefault(); 
		$('.overlay').fadeIn(400, 
		 	function(){ 
				$('.order-form') 
					.css('display', 'block') 
					.fadeIn(400);
		});
	});
	$('.closed, .overlay').click( function(){ 
		$('.order-form')
			.fadeOut(400, 
				function(){ 
					$(this).css('display', 'none'); 
					$('.overlay').fadeOut(400); 
				}
			);
	});

	/*$('.company .left a').click( function(event){ 
		event.preventDefault(); 
		$('.overlay').fadeIn(400,
		 	function(){ 
				$('.image') 
					.css('display', 'block') 
					.animate({opacity: 1}, 200);  
		});
	});*/
	$('.closed, .overlay').click( function(){ 
		$('.image')
			.animate({opacity: 0}, 200,  
				function(){ 
					$(this).css('display', 'none');
					$('.overlay').fadeOut(400);
				}
			);
	});

	
	$("header nav").on("click","a", function (event) {
	   event.preventDefault();
	   var id  = $(this).attr('href'),
	   	top = $(id).offset().top;
	   $('body,html').animate({scrollTop: top}, 1500);
	   self = $(this);
	   self.closest('header nav').find('li').removeClass('active');
	   self.closest('li').addClass('active');
	});

	$('body,html').scroll(function() {
		if($('#special').is(":visible")){
			$('.left').css('display', 'block');
			$('.right').css('display', 'block');
		}
		else{
			$('.left').css('display', 'none');
			$('.right').css('display', 'none');
		}
	});


	$(document).on('submit','.form-order',function(e){
      e.preventDefault();
      form = $(this);
       $.ajax({
                    url: 'ajax.php',
                    data: form.serialize(),
                    type: "post",
                    dataType: "json",
                    success: function (resp) {
                        console.log(resp);
                        form[0].reset();
                        $('.overlay').fadeIn(400).css('display', 'block');
                        $('.order-form').fadeIn(400).css('display', 'block');
                        $('.order-form .block').css('display', 'none');
                        $('.order-form .sucsses').css('display', 'block');
                        setTimeout(function () {
                        	$('.order-form').fadeOut(400).css('display', 'none');
                        	$('.order-form .sucsses').css('display', 'none');
                        	$('.order-form .block').css('display', 'block');
                        	$('.overlay').fadeOut(400).css('display', 'none');
                        },3000);
                                //$('#success').modal('show');
                                //setTimeout(function () {
                                  //  $('#success').modal('hide');
                               // },3000);
                    }
              });
  });

	$(document).on('submit','.form-order-big',function(e){
      e.preventDefault();
      form = $(this);
       $.ajax({
                    url: 'ajax-big.php',
                    data: form.serialize(),
                    type: "post",
                    dataType: "json",
                    success: function (resp) {
                        console.log(resp);
                        form[0].reset();
                        $('.order-form').fadeIn(400).css('display', 'block');
                        $('.order-form .block').css('display', 'none');
                        $('.overlay').fadeIn(400).css('display', 'block');
                        $('.order-form .sucsses').css('display', 'block');
                        setTimeout(function () {
                        	$('.order-form').fadeOut(400).css('display', 'none');
                        	$('.order-form .sucsses').css('display', 'none');
                        	$('.order-form .block').css('display', 'block');
                        	$('.overlay').fadeOut(400).css('display', 'none');
                        },3000);
                                //$('#success').modal('show');
                                //setTimeout(function () {
                                  //  $('#success').modal('hide');
                               // },3000);
                    }
              });
  });


	/*$("header").fadeIn(1000);*/
});