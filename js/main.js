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



	let obj = {
		className: 'open menu'
	}


	function addClass(obj, name) {
		let classNameArray = obj.className ? obj.className.split(' ') : [];

		if(classNameArray.indexOf(name) === -1) {	
			classNameArray.push(name);
		}

		obj.className = classNameArray.join(' ');
	}

	addClass(obj, 'new'); // obj.className='open menu new'
	addClass(obj, 'open'); // без изменений (класс уже существует)
	addClass(obj, 'me'); // obj.className='open menu new me'

	console.log(obj.className);

	function adddClass(obj, cls) {
	  var classes = obj.classsName ? obj.classsName.split(' ') : [];

	  for (var i = 0; i < classes.length; i++) {
	    if (classes[i] == cls) return; // класс уже есть
	  }

	  classes.push(cls); // добавить

	  obj.classsName = classes.join(' '); // и обновить свойство
	}

	

	adddClass(obj, 'new');
	adddClass(obj, 'open');
	adddClass(obj, 'me');
	console.log(obj.classsName) // open menu new me

});


var info = document.getElementById('info');
function onYouTubePlayerAPIReady() {
  var player = new YT.Player('player', {
      videoId: 'xrbrQhpvn8E', // this is the id of the video at youtube (the stuff after "?v=")
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
