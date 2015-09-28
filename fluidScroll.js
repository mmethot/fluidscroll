(function ($) {
	$.fn.fuildScroll = function() {
		var divPositions = [];
		var divs = $('#main').find('div.entry');
		var count = divs.length;
		
		for (var i = 0; i < count; i++) {
			divPositions[i] = $(divs[i]).position().top;
		}
		
		// The first entry will be the active one
		$('div.entry').first().addClass('active');

		// Mousewheel and DOMMouseScroll event
		$(document).on('mousewheel DOMMouseScroll', function (e) {
			
			e.preventDefault(); // We don't want the default mousewheel behavior
			var active = $('div.entry.active'); // We find our active entry
			
			// We must find the direction of the scroll
			var delta = e.originalEvent.detail < 0 || e.originalEvent.wheelDelta > 0 ? 1 : -1;
			
			// If the value is negative, the scroll is going down
			if (delta < 0) {
				next = active.next();
				
				// Is there another section?
				if (next.length) {
				    // Set a timer to avoid scrolling to topmost or 
					// bottommost following a rapid scroll of the wheel
					var timer = setTimeout(function () {
						$('body, html').animate({
							scrollTop: next.offset().top - 10
						}, 'slow');
						
						// Set the active tag to the right entry and remove every other active tag
						next.addClass('active').siblings().removeClass('active');
						
						clearTimeout(timer);
					}, 200);
				}

			} else {
				// If the value is positive, the scroll is going up
				prev = active.prev();

				if (prev.length) {
					var timer = setTimeout(function () {
						$('body, html').animate({
							scrollTop: prev.offset().top - 10
						}, 'slow');

						prev.addClass('active').siblings().removeClass('active');
						
						clearTimeout(timer);
					}, 200);
				}

			}
		});
	}
}(jQuery));