jQuery.noConflict();
	jQuery(document).ready(function($) {
		$(document).on('keyup', '#input_6_141', function (e) {
			var input1 = e.currentTarget.value;
			if (input1.search(/^.1/gi) != -1) {
				alert("Please use only your 10 digit number without the 1 in front");
		}
	});
});