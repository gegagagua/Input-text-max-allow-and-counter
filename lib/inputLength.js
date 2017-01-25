(function( $ ){

	'use strict';

	$.fn.inputLength = function() {

		return this.each(function(index, el) {

			
			$(el).keyup(function(e) {

				var $input 		= $(this),
					maxLength 	= +$input.attr('max'),
					charCount 	= $input.val().length,
					$counterEl  = $input.siblings('.limit');

				$counterEl.text( 'Limit : ' + maxLength + ' charachters, remaining : ' + (maxLength - charCount) );

			});


			$(el).keypress(function(e) {

				var $input 		= $(this),
					maxLength 	= +$input.attr('max'),
					charCount 	= $input.val().length;

				if (e.which < 0x20) {
		            return;
		        }
		        if ( charCount == maxLength ) {
		            e.preventDefault();
		        } else if (charCount > maxLength) {
		            $input.val( $input.val().substring( 0, maxLength ) );
		        }

			});

		});

	}

}( jQuery ));