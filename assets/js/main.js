$(document).ready(function () {

	$(".hamburger_menu").on("click", function (e) {
		e.preventDefault();
		$(".slide-bar").toggleClass("show");
		$("body").addClass("on-side");
		$('.body-overlay').addClass('active');
		$(this).addClass('active');
	});

	$(".close-mobile-menu > a").on("click", function (e) {
		e.preventDefault();
		$(".slide-bar").removeClass("show");
		$("body").removeClass("on-side");
		$('.body-overlay').removeClass('active');
		$('.hamburger_menu').removeClass('active');
	});







	function animateElements() {
		$('.progressbar').each(function () {
			var elementPos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			var percent = $(this).find('.circle').attr('data-percent');
			var percentage = parseInt(percent, 10) / parseInt(100, 10);
			var animate = $(this).data('animate');
			if (elementPos < topOfWindow + $(window).height() - 10 && !animate) {
				$(this).data('animate', true);
				$(this).find('.circle').circleProgress({
					startAngle: -Math.PI / 2,
					value: percent / 100,
					size: 180,
					thickness: 10,
					emptyFill: "#fff",
					fill: {
						color: '#49A6FF'
					}
				}).on('circle-animation-progress', function (event, progress, stepValue) {
					$(this).find('div').text((stepValue * 100).toFixed() + "%");
				}).stop();
			}
		});
	}

	// Show animated elements
	animateElements();
	$(window).scroll(animateElements);

	// sticky header active
	if ($("#header").length > 0) {
		$(window).on("scroll", function (event) {
			var scroll = $(window).scrollTop();
			if (scroll < 1) {
				$("#header").removeClass("original-1");
			} else {
				$("#header").addClass("original-1");
			}
		});
	}

	//Aos animation active
	AOS.init({
		offset: 100,
		duration: 400,
		easing: "ease-in-out",
		anchorPlacement: "top-bottom",
		disable: "mobile",
		once: false,
	});


	//Video poppup
	/*if ($(".play-btn").length > 0) {
		$(".play-btn").magnificPopup({
			type: "iframe",
		});
	};*/

	// page-progress
	/*var progressPath = document.querySelector(".progress-wrap path");
	var pathLength = progressPath.getTotalLength();
	progressPath.style.transition = progressPath.style.WebkitTransition =
		"none";
	progressPath.style.strokeDasharray = pathLength + " " + pathLength;
	progressPath.style.strokeDashoffset = pathLength;
	progressPath.getBoundingClientRect();
	progressPath.style.transition = progressPath.style.WebkitTransition =
		"stroke-dashoffset 10ms linear";
	var updateProgress = function () {
		var scroll = $(window).scrollTop();
		var height = $(document).height() - $(window).height();
		var progress = pathLength - (scroll * pathLength) / height;
		progressPath.style.strokeDashoffset = progress;
	};
	updateProgress();
	$(window).scroll(updateProgress);
	var offset = 50;
	var duration = 550;

	jQuery(window).on("scroll", function () {
		if (jQuery(this).scrollTop() > offset) {
			jQuery(".progress-wrap").addClass("active-progress");
		} else {
			jQuery(".progress-wrap").removeClass("active-progress");
		}
	});
	jQuery(".progress-wrap").on("click", function (event) {
		event.preventDefault();
		jQuery("html, body").animate({
			scrollTop: 0
		}, duration);
		return false;
	});*/

	//product colors
	/*const colors = $(".accordion1 .accordion-item");
	colors.on("click", function () {
		$(".accordion1 .accordion-item").removeClass("active");
		$(this).addClass("active");
	});*/

	//tes1 active
	/*const tes1 = $(".controls li");
	tes1.on("click", function () {
		$(".controls li").removeClass("active");
		$(this).addClass("active");
	});

	$("#ce-toggle1").click(function (event) {
		$(".plan-toggle-wrap1").toggleClass("active");
	});

	$("#ce-toggle1").change(function () {
		if ($(this).is(":checked")) {
			$(".tab-content #yearly1").hide();
			$(".tab-content #monthly1").show();
		} else {
			$(".tab-content #yearly1").show();
			$(".tab-content #monthly1").hide();
		}
	});*/




	$('.ourwork-owlslider').owlCarousel({
		loop: true,
		margin: 10,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: true
			},
			600: {
				items: 3,
				nav: true
			},
			1000: {
				items: 5,
				nav: true,
				loop: true
			}
		}
	});

	$('.team-logo-slider').owlCarousel({
		loop: true,
		margin: 10,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: false
			},
			600: {
				items: 3,
				nav: false
			},
			1000: {
				items: 5,
				nav: false,
				loop: false
			}
		}
	});




	$('.tech-list-slider').owlCarousel({
		loop: false,
		margin: 20,
		responsiveClass: true,
		dots: false,
		nav: true, // Enable navigation
		navText: [
			'<i class="fa-solid fa-arrow-left"></i>',
			'<i class="fa-solid fa-arrow-right"></i>'
		],
		responsive: {
			0: {
				items: 2,
				nav: false,
				dots: true // Ensure navigation is enabled for smaller breakpoints if needed
			},
			600: {
				items: 3,
				nav: true
			},
			1000: {
				items: 6,
				nav: true,
				loop: false
			}
		}
	});


	$('.tech-list-slider2').owlCarousel({
		loop: true,
		margin: 20,
		responsiveClass: true,
		dots: false,
		nav: false,
		autoplay: true,
		autoplayTimeout: 3000,
		navText: [
			'<i class="fa-solid fa-arrow-left"></i>',
			'<i class="fa-solid fa-arrow-right"></i>'
		],
		responsive: {
			0: {
				items: 2.2
			},
			600: {
				items: 3.1
			},
			1000: {
				items: 6.2
			}
		}
	});

	$('.tech-list-slider3').owlCarousel({
		rtl: true,
		loop: true,
		margin: 20,
		responsiveClass: true,
		dots: false,
		nav: false,
		autoplay: true,
		autoplayTimeout: 3000,
		navText: [
			'<i class="fa-solid fa-arrow-left"></i>',
			'<i class="fa-solid fa-arrow-right"></i>'
		],
		responsive: {
			0: {
				items: 2.2
			},
			600: {
				items: 3.2
			},
			1000: {
				items: 6.2
			}
		}
	});




	$('.testimonial-slider').owlCarousel({
		loop: true,
		margin: 25,
		responsiveClass: true,
		dots: true,
		nav: false,
		autoplay: true,
		autoplayTimeout: 4000,
		autoWidth: true,
		autoplayHoverPause: true,
		navText: [
			'<i class="fa-solid fa-arrow-left"></i>',
			'<i class="fa-solid fa-arrow-right"></i>'
		],
		responsive: {
			0: { items: 1, autoWidth: false },
			600: { items: 2 },
			1000: { items: 3 }
		}
	});


	$('.case-studies-slider').owlCarousel({
		loop: true,
		margin: 0,
		responsiveClass: true,
		dots: false,
		nav: true,
		autoplay: false,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
		navText: [
			'<i class="fa-solid fa-arrow-left"></i>',
			'<i class="fa-solid fa-arrow-right"></i>'
		],
		responsive: {
			0: { items: 1 },
			576: { items: 2 },
			768: { items: 3 },
			1199: { items: 4 }
		}
	});


	let currentImage = $("#dynamicImage").attr("src");

	$(window).on("scroll", function () {
		$(".content-section").each(function () {
			var sectionTop = $(this).offset().top;
			var scrollPos = $(window).scrollTop() + 200;

			if (scrollPos >= sectionTop) {
				var newImage = $(this).data("image");

				// Only change the image if it's different from the current one
				if (currentImage !== newImage) {
					currentImage = newImage;
					$("#dynamicImage").css("opacity", "0"); // Fade out
					setTimeout(() => {
						$("#dynamicImage").attr("src", newImage).css("opacity", "1"); // Fade in with new image
					}, 400);
				}

				// Highlight the active section
				$(".section-title, .expert-icon").removeClass("highlight");
				$(this).find(".section-title, .expert-icon").addClass("highlight");
			}
		});
	});

	// Remove highlight from all sections on hover of any section
	$(".content-section").hover(
		function () {
			$(".section-title, .expert-icon").removeClass("highlight"); // Remove highlight from all sections
		},
		function () {
			// Restore highlight to the active section based on scroll position
			$(".content-section").each(function () {
				var sectionTop = $(this).offset().top;
				var scrollPos = $(window).scrollTop() + 200;

				if (scrollPos >= sectionTop) {
					$(this).find(".section-title, .expert-icon").addClass("highlight");
					return false; // Exit loop after finding the first match
				}
			});
		}
	);




	$(".accordion-button").on("click", function () {
		let newImageSrc = $(this).attr("data-img");
		let $imgElement = $("#dynamicImageaccordion");

		if ($imgElement.attr("src") === newImageSrc) return; // Prevent unnecessary changes

		// Fade out image
		$imgElement.fadeOut(300, function () {
			// Change image source after fade out
			$imgElement.attr("src", newImageSrc).fadeIn(300); // Fade in smoothly
		});
	});


	document.querySelectorAll('.service-btn').forEach(button => {
		button.addEventListener('click', function () {
			const checkbox = this.querySelector('input');
			checkbox.checked = !checkbox.checked;
			this.classList.toggle('active', checkbox.checked);
		});
	});


	$(".more-menu-link").click(function () {
		let currentMenu = $(this).prev(".hide-menu"); // Get the corresponding menu
		let icon = $(this).find("i"); // Get the icon inside the clicked link

		// Toggle only the clicked menu
		currentMenu.slideToggle();

		// Toggle the plus/minus icon only for the clicked menu
		icon.toggleClass("fa-circle-plus fa-circle-minus");
	});



});


//preloader
$(window).on("load", function (event) {
	setTimeout(function () {
		$(".preloader").fadeToggle();
	}, 500);
});


$(window).scroll(function () {
	if ($(this).scrollTop() > 200) {
		$('.backtotop:hidden').stop(true, true).fadeIn();
	} else {
		$('.backtotop').stop(true, true).fadeOut();
	}
});
$(".scroll").on('click', function () {
	$("html, body").animate({
		scrollTop: 0
	}, 0);
	return false;
});


$(window).on('load', function () {
	$('#preloader').fadeOut('slow', function () {
		$(this).remove();
	});
});


if ($('.stricky').length) {
	$('.stricky').addClass('original').clone(true).insertAfter('.stricky').addClass('stricked-menu').removeClass('original');
}

$(window).on('scroll', function () {
	if ($('.stricked-menu').length) {
		var headerScrollPos = 20;
		var stricky = $('.stricked-menu');
		if ($(window).scrollTop() > headerScrollPos) {
			stricky.addClass('stricky-fixed');
		} else if ($(this).scrollTop() <= headerScrollPos) {
			stricky.removeClass('stricky-fixed');
		}
	}

});



$('.blog-banner-slide').owlCarousel({
	loop: true,
	margin: 30,
	responsiveClass: true,
	responsive: {
		0: {
			items: 1,
			nav: true
		},
		600: {
			items: 1,
			nav: false
		},
		1000: {
			items: 1,
			nav: true,
			loop: false
		}
	}
});



$('.new-slider-3').owlCarousel({
	loop: true,
	margin: 30,
	responsiveClass: true,
	responsive: {
		0: {
			items: 1,
			nav: true
		},
		600: {
			items: 2,
			nav: false
		},
		1000: {
			items: 3,
			nav: true,
			loop: false
		}
	}
});



$('.new-slider-2').owlCarousel({
	loop: true,
	margin: 30,
	responsiveClass: true,
	responsive: {
		0: {
			items: 1,
			nav: true
		},
		600: {
			items: 2,
			nav: false
		},
		1000: {
			items: 3,
			nav: true,
			loop: false
		}
	}
});



$('.new-slider-1').owlCarousel({
	loop: true,
	margin: 30,
	responsiveClass: true,
	autoplay: true,
	autoplayTimeout: 2000,
	responsive: {
		0: {
			items: 1,
			nav: true
		},
		600: {
			items: 3,
			nav: false,
			loop: true
		},
		1000: {
			items: 4,
			nav: true,
			loop: true
		}
	}
});


document.addEventListener("DOMContentLoaded", function () {
    function setEqualHeight() {
        let cards = document.querySelectorAll('.related-post .card');
        let maxHeight = 0;

        // Reset all card heights to auto before recalculating
        cards.forEach(card => {
            card.style.height = 'auto';
        });

        // Find the tallest card height
        cards.forEach(card => {
            let cardHeight = card.offsetHeight;
            if (cardHeight > maxHeight) {
                maxHeight = cardHeight;
            }
        });

        // Apply max height to all cards
        cards.forEach(card => {
            card.style.height = maxHeight + 'px';
        });
    }

    // Run function when page loads
    setEqualHeight();

    // Run function again on window resize
    window.addEventListener('resize', setEqualHeight);

    // Run function again when images are loaded
    window.addEventListener('load', setEqualHeight);
});







