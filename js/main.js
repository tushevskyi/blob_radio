$(function() {

	let offsetLeft = 0,
		offsetTop = 0;
	let moveAnimation = function() {
		$('.animation1').offset({left: offsetLeft, top: offsetTop});

		offsetLeft++;
		offsetTop++;

		if (offsetLeft > 200 && offsetTop > 200) {
			offsetLeft = 200;
			offsetTop = 200;
			clearInterval(moveAnimation);
		}
	};

	setInterval(moveAnimation, 10);

	$('html').mousemove(function(event) {
		$('.figure1').offset({ 
			left:event.pageX,
			top:event.pageY
		});
	});


	(function first_slider() {

		// let img_array 		  = [16,21,22,26,28,32,19,3,36,37],
		let img_array = [39];
			$body 	  		  = $('body'),	
			random_value 	  = 0;

			$body
				.css({
					'background':'url(' + "img/" + img_array[random_value] + ".gif" + ') no-repeat center center fixed',
					'background-size':'cover',
			});	

		function random() {
			random_value = Math.round(Math.random()*(img_array.length-1));

			$body
				.css({
					'background':'url(' + "img/" + img_array[random_value] + ".gif" + ') no-repeat center center fixed',
					'background-size':'cover',
			});	
		}

		setInterval(random, 20000);


		// steInterval(slider, 15000);

		function slider() {
			i++;

			if(i === img_array.length) {
				i = 0;
			}

			$body
				.css({
					'background':'url(' + "img/" + img_array[i] + ".gif" + ') no-repeat center center fixed',
					'background-size':'cover',
			});
		}

	})();

});


const info = document.getElementById('info');

function onYouTubePlayerAPIReady() {
	const player = new YT.Player('player', {
    	videoId: '8XiqrERZo_8', // this is the id of the video at youtube (the stuff after "?v=") 
    	events: {
        	onReady: function (e) {
            	console.log('video is loaded');
              	e.target.playVideo();
          	},
          	onStateChange: function (event) {
            	if (event.data === 1) {
                	console.log('video started playing');
              	}
          	}
      	}
	});
  // you can do more stuff with the player variable
}
