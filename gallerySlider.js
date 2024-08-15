const heroImgContainer = document.querySelector('.hero-img');
const thumbnails = document.querySelectorAll('.thumbnail-box img');
const images = [
    './images/image-product-1.jpg',
    './images/image-product-2.jpg',
    './images/image-product-3.jpg',
    './images/image-product-4.jpg'
];

// Lightbox elements
const desktopLightbox = document.querySelector('.desktop-lightbox');
const lightboxHeroImgContainer = desktopLightbox.querySelector('.hero-img');
const lightboxThumbnails = desktopLightbox.querySelectorAll('.thumbnail-box img');
const lightboxCloseBtn = document.querySelector('.desktop-lightbox-close');
const lightboxNextBtn = document.querySelector('.next-btn');
const lightboxNextBtns = document.querySelector('.next-btns');
const lightboxPrevBtn = document.querySelector('.previous-btn');
const lightboxPrevBtns = document.querySelector('.previous-btns');

let currentIndex = 0;

// load images dynamically
function loadImages(container) {
    images.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        img.style.opacity = index === 0 ? '1' : '0';
        container.appendChild(img);
    });
}

loadImages(heroImgContainer); 
loadImages(lightboxHeroImgContainer); 

const imgs = heroImgContainer.querySelectorAll('img');
const lightboxImgs = lightboxHeroImgContainer.querySelectorAll('img');

// Function to show slide
function showSlide(index, containerImgs, containerThumbnails) {
    containerImgs.forEach((img, i) => {
        img.style.opacity = i === index ? '1' : '0';
    });
    containerThumbnails.forEach((thumbnail, i) => {
        thumbnail.style.opacity = i === index ? '0.5' : '1'; 
        thumbnail.style.border = i === index ? '2px solid var(--Orange)' : 'none';
    });
    currentIndex = index; 
}

// Thumbnail click event for both main gallery and lightbox
thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', (e) => {
        const index = parseInt(e.target.dataset.index);
        showSlide(index, imgs, thumbnails);
    });
});

lightboxThumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', (e) => {
        const index = parseInt(e.target.dataset.index);
        showSlide(index, lightboxImgs, lightboxThumbnails);
    });
});

const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.previous-btn');

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showSlide(currentIndex, imgs, thumbnails);
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showSlide(currentIndex, imgs, thumbnails);
});

lightboxPrevBtns.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showSlide(currentIndex, lightboxImgs, lightboxThumbnails);
});

lightboxNextBtns.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showSlide(currentIndex, lightboxImgs, lightboxThumbnails);
});

lightboxNextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showSlide(currentIndex, lightboxImgs, lightboxThumbnails);
});

lightboxPrevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showSlide(currentIndex, lightboxImgs, lightboxThumbnails);
});

// Lightbox open and close functionality
heroImgContainer.addEventListener('click', () => {
    desktopLightbox.style.display = 'block';
    showSlide(currentIndex, lightboxImgs, lightboxThumbnails); 
});

lightboxCloseBtn.addEventListener('click', () => {
    desktopLightbox.style.display = 'none';
});
