/*
------- INDEX -------
//
1.Hamburger menu

//
2.Carousel / Slideshow

//
3. Light box in offer section

*/

///////////////////////
// 1.Hamburger menu //
/////////////////////

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
burgerBarsEl.addEventListener("click", () => {
	toggleMenu();
});

// action for when clicking items in hamburger menu
menuItems.forEach((menuItem) => {
	menuItem.addEventListener("click", toggleMenu);
});

/////////////////////////////
// 2.Carousel / Slideshow //
///////////////////////////

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
		caption: "3. Vi kontaktar dig",
	},
	{
		image: "assets/images/slide-4.jpg",
		indicator: "assets/graphics/cake-4.svg",
		caption: "4. Ärendet behandlas",
	},
];

// Isolating each property into new array
const activeImage = slideshowItems.map((obj) => obj.image);
const activeIndicator = slideshowItems.map((obj) => obj.indicator);
const activeCaption = slideshowItems.map((obj) => obj.caption);

// giving property an index
slideshowImgEl.src = activeImage[0];
indicatorEl.src = activeIndicator[0];
captionEl.innerText = activeCaption[0];

let position = 0;

// function for next slide
const moveRight = () => {
	if (position >= activeImage.length - 1) {
		position = 0;
		slideshowImgEl.src = activeImage[position];
		indicatorEl.src = activeIndicator[position];
		captionEl.innerText = activeCaption[position];
		return;
	}
	slideshowImgEl.src = activeImage[position + 1];
	indicatorEl.src = activeIndicator[position + 1];
	captionEl.innerText = activeCaption[position + 1];
	position++;
};

// function for previous slide
const moveLeft = () => {
	if (position < 1) {
		position = activeImage.length - 1;
		slideshowImgEl.src = activeImage[position];
		indicatorEl.src = activeIndicator[position];
		captionEl.innerText = activeCaption[position];
		return;
	}
	slideshowImgEl.src = activeImage[position - 1];
	indicatorEl.src = activeIndicator[position - 1];
	captionEl.innerText = activeCaption[position - 1];
	position--;
};

// click events for next and previous slide
nextBtnEl.addEventListener("click", moveRight);
prevBtnEl.addEventListener("click", moveLeft);

///////////////////////////////////
// 3.Light box in offer section //
/////////////////////////////////

const lightboxEl = document.querySelector(".lightbox");
const closeIconEl = document.querySelector(".closeIcon");

const showLightbox = () => {
	if (lightboxEl.style.display === "block") {
		lightboxEl.style.display = "none";
		lightboxEl.classList.remove("showLightbox");
	} else {
		lightboxEl.style.display = "block";
		lightboxEl.classList.add("showLightbox");
	}
};

// const infoSmall;
// const infoMedium;
// const infoLarge;

// Click event for more info buttons
const moreBtnEl = document.querySelectorAll(".moreBtn").forEach((btn) => {
	btn.addEventListener("click", () => {
		showLightbox();
	});
});

// close icon for lightbox
closeIconEl.addEventListener("click", () => {
	showLightbox();
});
