$(document).ready(function() {

	$('form').on('submit', function(event) {
		event.preventDefault();

		var newNumber = $('.inputBox').val()
		// use +newNumber to change a string into an integer
		var num = +newNumber
		$('.inputBox').val('');
		$('.fizzbuzz').empty();

		if ( num !== NaN && num >= 1 && num <= 100 && num % 1 == 0) {
			// num % 1 == 0 checks to see if there is an input with a decimal.
			// i is the index/counter, allows counting to start at 1 everytime.
			// i++ will make function increment by 1.
      var i = 1
			while (i <= num) {
				if ((i % 3 == 0) && (i% 5 == 0)) {
					$('.fizzbuzz').append('<li>FizzBuzz</li>');
				} else if (i % 3 == 0) {
					$('.fizzbuzz').append('<li>Fizz</li>');
				} else if (i % 5 == 0) {
					$('.fizzbuzz').append('<li>Buzz</li>');
				} else {
					$('.fizzbuzz').append('<li>' + i + '</li>');
				}
				i++
		  }
		} else {
			alert("Please type in a whole number between 1 and 100!");
		}
});

	$('.resetButton').click(function(event) {
		event.preventDefault();
		$('.fizzbuzz').empty();
	});

});


