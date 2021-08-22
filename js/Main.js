	let menu = document.querySelector('.menu');
	let btn_menu = document.querySelector('.btn_menu');
	let btn_cross = document.querySelector('.btn_cross');
	let header = document.querySelector('.header');
	let number = document.querySelector('.number');
	let price_subscribe = document.querySelector('.price_subscribe');
	let offset = 0;

	btn_menu.addEventListener('click', function () {
		menu.classList.remove('none');
		btn_menu.classList.add('active');
	});

	btn_cross.addEventListener('click', function () {
		btn_menu.classList.remove('active');
		menu.classList.add('none');
	});

	window.addEventListener('scroll', function () {

		if (pageYOffset >= 3500) {
			setInterval(() => {
				offset++
				if (offset > 199) {
					offset = 199;
				}
				price_subscribe.innerHTML = '$' + offset;
			})
		}
	})


	