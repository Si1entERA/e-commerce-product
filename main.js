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

/*
const calculation = () => {

const total = document.getElementById('total').val;
const discountPrice = document.getElementById('discount-price').innerHTML
const dicountValueOnly = discountPrice.replace(/[^0-9.]/g, '');

const totalPrice = document.querySelector('.total-price').innerHTML;
const totalPriceOnly = totalPrice.replace(/[^0-9.]/g, '');

const discountPercentage = document.getElementById('discount-Percentage').innerHTML;
const PercentageOnly = discountPercentage.replace(/[^0-9]/g, '');

let subAns = (PercentageOnly / 100) * totalPriceOnly

  total = (totalPriceOnly - subAns) * items.innerHTML
  console.log((totalPriceOnly - subAns) * items.value)

}
*/


// cart
const cartBox = document.querySelector('.cart-box-item');
const carEmptyText = document.querySelector('.cart-empty-text');
const addCart = document.getElementById('addCart');
const cartNumber = document.querySelector('.cart-number');
const itemOutput = document.getElementById('item-output');
const test = document.querySelector('.test1');

const total = document.getElementById('total');


const addItem = () => {
  if (items.value == 0) {
    alert('You cannot add an empty item');
  } else {
    cartNumber.innerHTML++;
    itemOutput.style.display = 'block';
    carEmptyText.style.display = 'none';

    // Parse the discount price to ensure it's a valid number
    const discountPrice = parseFloat(document.getElementById('discount-price').innerHTML.replace('$', '').trim());

    // Parse the items value to ensure it's a number
    const itemCount = parseInt(items.value, 10);

    if (!isNaN(discountPrice) && !isNaN(itemCount)) {
      const totalValue = (discountPrice * itemCount).toFixed(2);

      const ot = `
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
      
      cartBox.insertAdjacentHTML("beforeend", ot);

      // Add event listener to the new delete icon
      const newDeleteIcon = cartBox.querySelector('.checkout-item:last-child .delete-icon');
      newDeleteIcon.addEventListener('click', handleDelete);
    } else {
      console.error("Invalid discount price or item count");
    }
  }
};

// Function to handle the delete action
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



// DARK MODE
const darkmode = document.getElementById('darkmode');
const productNameTitle = document.getElementById('product-name-title');
const description = document.getElementById('description');
const discountPrice = document.getElementById('discount-price');
const discountPercentageBox = document.getElementById('discount-Percentage');
const sidebarBtn = document.querySelectorAll('sidebar-btn')

// SIDEBAR


const switchDarkmode = (e) => {
  if(e.target.checked){
    profileCard.style.backgroundColor = 'black'
    body.style.backgroundColor = 'black'

  //   sidebar.style.backgroundColor = 'var(--Black)'
  //   sidebarBtn.forEach(btn => {
  //     btn.style.color = 'white';
  // });

    productNameTitle.style.color = 'var(--White)'
    description.style.color = 'var(--White)'
    discountPrice.style.color = 'var(--White)'
    discountPercentageBox.style.color = 'black'
    discountPercentageBox.style.backgroundColor = 'var(--White)'

    cartCard.backgroundColor = 'black'
    
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


// Add event listener to the add to cart button
addCart.addEventListener('click', addItem);
openSidebar.addEventListener('click', openMenu)
closeSidebar.addEventListener('click', closeMenu)
profile.addEventListener('click', openProfile)
profileCloseBtn.addEventListener('click', closeProfile)
darkmode.addEventListener('change', switchDarkmode)
cartBtn.addEventListener('click', openCart)
plus.addEventListener('click', incrementItems);
minus.addEventListener('click', decrementItems)
