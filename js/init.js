	$(document).ready(function() {
		
		// this will handle scroll events and animate the menu
		var networkingFlag = true; 	// if true the networking button is not clicked
		var socialFlag = true;		// if true the twitter/facebook/instagram has not been loaded
		var scrollFlag = false; 		// if true the menu, scroll and net button are hidden from view
		
		// loc will contain the page name with any paramenters
		var loc = document.location.href.match(/[^\/]+$/)
		if (loc != null) loc = loc.toString();
		else loc = 'null';
	
		// activePage will contain the page name without any paramenters
		var activePage = loc.substring(0, (loc.indexOf('?') > 1) ? loc.indexOf('?') : loc.length);
		
		// higlight the active page in the menu
		$("#menu ul").children().each(function () {
			var data_link = activePage.indexOf('-') > 0 ? activePage.substring(0, activePage.indexOf('-')) : activePage.substring(0, activePage.indexOf('.'));
			if ($(this).attr('data-link') != null && $(this).attr('data-link').includes(data_link)) {
				$(this).addClass("active");
				return false;
			}
		});
		
		// set the menu not visible as the splash screen is visible
		if(activePage === 'null' || activePage === 'index.php') {
			$('#menu').css({opacity: 0});
		}
		
		// this will add margin so that main menu will not be over italics
		$(".contentMenu").css({"margin-top": $(".navbar").height() + 25});
		
		// if no splash page is requested just scroll the window down
		if(loc === 'index.php?nosplash') {
			scrollFlag = false;
			$(document).scrollTop($(window).height());
		}
		
		// check if the page was opened scrolled and show scrollToTop and netButton
		if ($(document).scrollTop() > $(window).height()) {
			$('#scrollToTop').stop().animate({bottom: '10px', opacity: 1}, 300);
			$('#netButton').stop().animate({bottom: '10px', opacity: 1}, 300);
			// do this only if on index page with splash screen
			if (activePage === 'null' || activePage === 'index.php') {
				// show menu
				$('#menu').stop().animate({opacity: 1}, 300);
			}
		}
		
		// this will highlight main menu on hover
		$('#menu').hover(function() {
			$('#menu').stop().animate({opacity: 1}, 300);
		}, function(){
			if (!scrollFlag && (activePage === 'null' || activePage === 'index.php')) {
				$('#menu').stop().animate({opacity: 0}, 300);
			}
		});
		
		// this will handle the scrolling
		$(window).scroll(function(e) {	
			if ($(document).scrollTop() > $(window).height() * 0.2) {
				if (!scrollFlag) {
					// show buttons
					$('#scrollToTop').stop().animate({bottom: '10px', opacity: 1}, 300);
					$('#netButton').stop().animate({bottom: '10px', opacity: 1}, 300);
					
					// do this only if on index page with splash screen
					if(activePage === 'null' || activePage === 'index.php') {
						// show menu
						$('#menu').stop().animate({opacity: 1}, 300);
					}
					scrollFlag = true;
				}
			} 

			if ($(document).scrollTop() < $(window).height() * 0.2)	{
				if (scrollFlag) {
					// show buttons
					$('#scrollToTop').stop().animate({bottom: '-60px', opacity: 0}, 300);
					
					// do this only if on index page with splash screen
					if(activePage === 'null' || activePage === 'index.php') {
						$('#netButton').stop().animate({bottom: '-60px', opacity: 0}, 300);
						if (!networkingFlag)
							$('#netButton').click();
					}
					
					// do this only if on index page with splash screen
					if(activePage === 'null' || activePage === 'index.php') {
						$('#menu').stop().animate({opacity: 0}, 300, function() {
							//$('#menu').css({display: 'none'});
						});
					}
					scrollFlag = false;
				}
			}
		});
		
		// thiss will offset the last workshop item(s)
		$workshop_count = $('.workshopItem').size();
		if ($workshop_count % 3 == 1) {
			$('.workshopItem:last').addClass('col-md-offset-4');
		} else if ($workshop_count % 3 == 2) {
			$('.workshopItem').eq(-2).addClass('col-md-offset-2');
		}
		
		
		/*********************************************
		 *	GLOBAL FUNCTIONS WITHIN DOCUMENT READY   *
		 *********************************************/
		
		// this will handle the partners
		var partnersFlag = false;
		$('#partnersExpand').click(function() {
			if(!partnersFlag) {
				$('#partnersDiv').animate({height: $('#partnersContent').height() + 50}, 300);
				$('#partnersExpand').css({'background-image': 'url(images/hud/arrowUp.png)'});
				$('#partnersFader').animate({opacity: 0});
				partnersFlag = true;
			} else {
				$('#partnersDiv').animate({height: 240}, 300);
				$('html, body').animate({scrollTop: $("#partners").offset().top - 30}, 300);
				$(this).css({'background-image': 'url(images/hud/arrowDown.png)'});
				$('#partnersFader').animate({opacity: 1});
				partnersFlag = false;
			}
		});
		
		// this will handle networking
		$('#netButton').click(function(){
			// open
			if (networkingFlag) {
				$('#networking').css({right: parseInt($('#contact').css('right')) + 25});
				$('#networking').stop().animate({width: '600px', height: '300px', opacity: 1}, 300);
				networkingFlag = false;
				if (socialFlag) {
					socialFlag = false;
					facebook(document, 'script', 'facebook-jssdk');
					tweet(document,'script','twitter-wjs');
					$('#netInstaHolder').append('<iframe src="https://snapwidget.com/embed/485377" class="snapwidget-widget" allowTransparency="true" frameborder="0" scrolling="no" style="border:none; overflow:hidden; width:100%;"></iframe>');
				}
			} else {
				// hide
				$('#networking').stop().animate({width: 0, height: 0, opacity: 0}, 300);
				networkingFlag = true;
			}
		});
		
		//this will handle scrollToTop button
		$('#scrollToTop').click(function(){
			$('#scrollToTop').stop().animate({bottom: '-60px'}, 300);
			$('#contact').stop().animate({right: '10px'}, 300);
			if ($('#splash').height() === null) {
				$('html,body').stop().animate({scrollTop: 0}, 300);
			} else {
				$('html,body').stop().animate({scrollTop: $('#splash').height()}, 300);
			}
		});
		
		//this will handle scrollMe button
		$('#scrollMe').click(function(){
			$('html, body').animate({ scrollTop: $(window).height() }, '100vh');
			$('#netButton').animate({bottom: '10px', opacity: 1}, 500);
		});
		
		// this will handle content menu links
		$('.contentSubMenu a').click(function(){
			var element = $('#contentSide').children().eq($(this).index() + 1);
			$('html, body').animate({
				scrollTop: element.offset().top - 40
			}, 1000);
		});
		
		// tweeter function
		var tweet = function(d,s,id) {
			var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';
			if(!d.getElementById(id)){
				js=d.createElement(s);
				js.id=id;
				js.src=p+'://platform.twitter.com/widgets.js';
				fjs.parentNode.insertBefore(js,fjs);
			}
		}
		
		// facebook function
		var facebook = function(d, s, id) {
			var js, fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) return;
			js = d.createElement(s); js.id = id;
			js.src = '//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5&appId=1519614248360132';
			fjs.parentNode.insertBefore(js, fjs);
		}
		
			
		// this will load networking for mobiles only
		if ($(window).width() < 992) {
			facebook(document, 'script', 'facebook-jssdk');
			tweet(document,'script','twitter-wjs');
			$('#netInstaHolder').append('<iframe src="https://snapwidget.com/embed/485377" class="snapwidget-widget" allowTransparency="true" frameborder="0" scrolling="no" style="border:none; overflow:hidden; width:100%;"></iframe>');			
		}
	});
		
	/**********************************************
	 *	GLOBAL FUNCTIONS OUTSIDE DOCUMENT READY   *
	 **********************************************/
	 
	function getBackground(){
		var temp = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
		if (temp === 1) {
			$("#contentSide").css("background-image", "url('images/hud/background/orange.png')");
		} else if (temp === 2) {
			$("#contentSide").css("background-image", "url('images/hud/background/blue.png')");
		} else if (temp === 3) {
			$("#contentSide").css("background-image", "url('images/hud/background/green.png')");
		}  else {
			$("#contentSide").css("background-image", "url('images/hud/background/pink.png')");
		}
	}
		
	// this will change the language in session
	function change_language(lang) {
		console.log("api/changeLanguage.php?lang=" + lang);
		$.get("api/changeLanguage.php?lang=" + lang, function(data, status){
			if (data === lang && status === 'success'){
				location.reload();
			}
			console.log(data);
		});
	}