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

// checkout
const cartBtn = document.querySelector('.cart-img');
const cartCard = document.querySelector('.cart-box');

const body = document.body;



// input
const plus = document.querySelector('.plus-box');
const minus = document.querySelector('.minus-box');
const items = document.getElementById('items');

// desktop gallery
const desktopGallery = document.querySelector('.hero-img');
const desktopLightView = document.querySelector('.desktop-lightbox');
const desktopLightboxClose = document.querySelector('.desktop-lightbox-close');
const arrowBtn = document.querySelector('.nav-btn-box');



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
  body.classList.remove('lock')
}

const closeProfile = () => {
  profileCard.style.display = 'none';
  overlay.style.display = 'none';
}

const openCart = (e) => {
  cartCard.classList.toggle('cart-open')
}


const incrementItems = () => {
  if(items.value >= 0){
    minus.style.opacity = '1'
    minus.disabled = false

  }
  items.value++
}

const decrementItems = () => {
  if(items.value == 0){
    minus.style.opacity = '0.5'
    minus.disabled = true
  }
  else {
  items.value--;
  minus.style.opacity = '1'
  }
}

const openLightbox = () => {
  desktopLightView.style.display = 'block';
  overlay.style.display = 'block'
}

const closeLightbox = () => {
  desktopLightView.style.display = 'none';
  overlay.style.display = 'none';
}

// cart
const cartBox = document.querySelector('.cart-box-item');
const carEmptyText = document.querySelector('.cart-empty-text');
const addCart = document.getElementById('addCart');
const cartNumber = document.querySelector('.cart-number');
const itemOutput = document.getElementById('item-output');
const total = document.getElementById('total');


const addItem = () => {
  if (items.value == 0) {
    alert('You cannot add an empty item');
  } else {
    cartNumber.innerHTML++;
    itemOutput.style.display = 'block';
    carEmptyText.style.display = 'none';

    const discountPrice = parseFloat(document.getElementById('discount-price').innerHTML.replace('$', '').trim());

    const itemCount = parseInt(items.value, 10);

    if (!isNaN(discountPrice) && !isNaN(itemCount)) {
      const totalValue = (discountPrice * itemCount).toFixed(2);

      const cardOutput = `
        <div class="checkout-item">
          <img src="./images/image-product-1-thumbnail.jpg" alt="">
          <div class="checkout-product">
            <div class="checkout-productName">
              <p>Fall Limited Edition Sneakers</p>
            </div>
            <div class="checkout-productPrice">
              <p><span>$</span>${discountPrice.toFixed(2)} x ${itemCount} <span id="total">$${totalValue}</span></p>
            </div>
          </div>
          <img src="./images/icon-delete.svg" class="delete-icon" alt="delete icon">
        </div>`;
      
      cartBox.insertAdjacentHTML("beforeend", cardOutput);

      const newDeleteIcon = cartBox.querySelector('.checkout-item:last-child .delete-icon');
      newDeleteIcon.addEventListener('click', handleDelete);
    } else {
      console.error("Invalid discount price or item count");
    }
  }
};

function handleDelete(event) {
  const item = event.target.closest('.checkout-item');
  if (item) {
    cartNumber.innerHTML --
    item.remove();
    console.log('deleted');
  }

  if (cartNumber.innerHTML == 0){
    itemOutput.style.display = 'none';
    carEmptyText.style.display = 'block';
  }
}


addCart.addEventListener('click', addItem);
openSidebar.addEventListener('click', openMenu)
closeSidebar.addEventListener('click', closeMenu)
profile.addEventListener('click', openProfile)
profileCloseBtn.addEventListener('click', closeProfile)
cartBtn.addEventListener('click', openCart)
plus.addEventListener('click', incrementItems);
minus.addEventListener('click', decrementItems)
desktopGallery.addEventListener('click', openLightbox)
desktopLightboxClose.addEventListener('click', closeLightbox)
