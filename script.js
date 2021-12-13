/////////////////////
// Hamburger menu //
///////////////////

const menuEl = document.querySelector("#menu");

const burgerBarsEl = document.querySelector(".burgerBars");
const menuItems = document.querySelectorAll(".menuItem");

// hamburger menu toggler
const toggleMenu = () => {
	if (menuEl.style.display === "block") {
		menuEl.style.display = "none";
		menuEl.classList.remove("showMenu");
	} else {
		menuEl.style.display = "block";
		menuEl.classList.add("showMenu");
	}
};

// click event for hamburger icon
burgerBarsEl.addEventListener("click", (e) => {
	toggleMenu();
});

// action for when clicking items in hamburger menu
menuItems.forEach((menuItem) => {
	menuItem.addEventListener("click", toggleMenu);
});

///////////////////////////
// Carousel / Slideshow //
/////////////////////////

const slideboxEl = document.querySelector(".slide");

const indicatorEl = document.querySelector(".stepIndicator");
const slideshowImgEl = document.querySelector(".slideshowImg");
const captionEl = document.querySelector(".carousel-caption");

const nextBtnEl = document.querySelector(".nextBtn");
const prevBtnEl = document.querySelector(".prevBtn");

// Objects for carousel/slideshow
const slideshowItems = [
	{
		image: "assets/images/slide-1.jpg",
		indicator: "assets/graphics/cake-1.svg",
		caption: "1. Skicka in din låneansökan",
	},
	{
		image: "assets/images/slide-2.jpg",
		indicator: "assets/graphics/cake-2.svg",
		caption: "2. Vi går igenom din ansökan",
	},
	{
		image: "assets/images/slide-3.jpg",
		indicator: "assets/graphics/cake-3.svg",
		caption: "3.Vi kontaktar dig",
	},
	{
		image: "assets/images/slide-4.jpg",
		indicator: "assets/graphics/cake-4.svg",
		caption: "4. Ärendet behandlas",
	},
];

/*
slideshowItems.forEach((slide) => {
	slideboxEl.innerHTML = `<img
		class="stepIndicator"
		src="${slide.indicator}"
		alt="indicator"
	/>
	<img
		src="${slide.image}"
		class="slideshowImg"
	/>
	<p class="carousel-caption">${slide.caption}</p>`;
});
*/

const getSlide = () => {
	// get object
	// display object image
	// display object indicator
	// display object caption
};
