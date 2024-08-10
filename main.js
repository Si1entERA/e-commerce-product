// sidebar
const openSidebar = document.querySelector('.menu-img');
const closeSidebar = document.querySelector('.close-menu');
const sidebar = document.querySelector('.sidebar');

// background shadow from sidebar + profile
const overlay = document.querySelector('.overlay');


// manage profile
const profileCloseBtn = document.querySelector('.profile-close-btn');
const profile = document.querySelector('.profile-img');
const profileCard = document.querySelector('.profile-box');

const body = document.body;

// image gallery slider
const imageGallery = document.querySelector('.hero-img');
const previousBtn = document.querySelector('.previous-btn');
const nextBtn = document.querySelector('.next-btn');

// DARK MODE
const darkmode = document.getElementById('darkmode');
const productNameTitle = document.getElementById('product-name-title');
const description = document.getElementById('description');
const discountPrice = document.getElementById('discount-price');
const discountPercentageBox = document.getElementById('discount');

// *********************************

const openMenu = () => {
  sidebar.classList.add('open')
  overlay.style.display = 'block'
  body.classList.add('lock')
}

const openProfile = () => {
  profileCard.style.display = 'flex';
  overlay.style.display = 'block'

}

const closeMenu = () => {
  sidebar.classList.remove('open')
  overlay.style.display = 'none'
}

const closeProfile = () => {
  profileCard.style.display = 'none';
  overlay.style.display = 'none';
}

const switchDarkmode = (e) => {
  if(e.target.checked){
    profileCard.style.backgroundColor = 'black'
    body.style.backgroundColor = 'black'

    productNameTitle.style.color = 'var(--White)'
    description.style.color = 'var(--White)'
    discountPrice.style.color = 'var(--White)'
    discountPercentageBox.style.color = 'black'
    discountPercentageBox.style.backgroundColor = 'var(--White)'
  }
  else{
    profileCard.style.backgroundColor = 'var(--White)'
    body.style.backgroundColor = 'var(--White)'

    productNameTitle.style.color = 'black'
    description.style.color = 'var(--Dark-grayish-blue)'
    discountPrice.style.color = 'black'
    discountPercentageBox.style.color = 'var(--White)'
    discountPercentageBox.style.backgroundColor = 'black'

  }
}

  // Image slider
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
const prevBtn = document.querySelector('.previous-btn');

function showSlide(index) {
    imgs.forEach((img, i) => {
        img.style.opacity = i === index ? '1' : '0';
    });
}

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showSlide(currentIndex);
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showSlide(currentIndex);
});


openSidebar.addEventListener('click', openMenu)
closeSidebar.addEventListener('click', closeMenu)
profile.addEventListener('click', openProfile)
profileCloseBtn.addEventListener('click', closeProfile)
darkmode.addEventListener('change', switchDarkmode)

