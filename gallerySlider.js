// // image gallery slider
// const imageGallery = document.querySelector('.hero-img');
// const previousBtn = document.querySelector('.previous-btn');
// const nextBtn = document.querySelector('.next-btn');

//   // Image slider
//   const images = [
//     '/images/image-product-1.jpg',
//     '/images/image-product-2.jpg',
//     '/images/image-product-3.jpg',
//     '/images/image-product-4.jpg'
// ];

// const heroImgContainer = document.querySelector('.hero-img');
// let currentIndex = 0;

// // Function to load images dynamically
// function loadImages() {
//     images.forEach((src, index) => {
//         const img = document.createElement('img');
//         img.src = src;
//         img.style.opacity = index === 0 ? '1' : '0';
//         heroImgContainer.appendChild(img);
//     });
// }

// loadImages();

// const imgs = document.querySelectorAll('.hero-img img');
// const prevBtn = document.querySelector('.previous-btn');

// function showSlide(index) {
//     imgs.forEach((img, i) => {
//         img.style.opacity = i === index ? '1' : '0';
//     });
// }

// nextBtn.addEventListener('click', () => {
//     currentIndex = (currentIndex + 1) % images.length;
//     showSlide(currentIndex);
// });

// prevBtn.addEventListener('click', () => {
//     currentIndex = (currentIndex - 1 + images.length) % images.length;
//     showSlide(currentIndex);
// });

const imageGallery = document.querySelector('.hero-img');
const thumbnails = document.querySelectorAll('.thumbnail-box img');
const images = [
    '/images/image-product-1.jpg',
    '/images/image-product-2.jpg',
    '/images/image-product-3.jpg',
    '/images/image-product-4.jpg'
];

const heroImgContainer = document.querySelector('.hero-img');
let currentIndex = 0;

// Function to load images dynamically
function loadImages() {
    images.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        img.style.opacity = index === 0 ? '1' : '0';
        heroImgContainer.appendChild(img);
    });
}

loadImages();

const imgs = document.querySelectorAll('.hero-img img');

function showSlide(index) {
    imgs.forEach((img, i) => {
        img.style.opacity = i === index ? '1' : '0';
    });
    currentIndex = index; // Update the current index
}

// Thumbnail click event to change the hero image
thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', (e) => {
        const index = parseInt(e.target.dataset.index);
        showSlide(index);
    });
});

const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.previous-btn');

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showSlide(currentIndex);
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showSlide(currentIndex);
});
