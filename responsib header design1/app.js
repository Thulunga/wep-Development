const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');
	
	//Toggle now
	burger.addEventListener('click', () => {
		nav.classList.toggle('nav-active');
	})
}
navSlide();