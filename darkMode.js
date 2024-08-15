// DARK MODE =>(DISABLED)
const darkmode = document.getElementById('darkmode');
const productNameTitle = document.getElementById('product-name-title');
const description = document.getElementById('description');
const discountPrice = document.getElementById('discount-price');
const discountPercentageBox = document.getElementById('discount-Percentage');
const sidebarBtn = document.querySelectorAll('sidebar-btn')

const switchDarkmode = (e) => {
  if(e.target.checked){
    profileCard.style.backgroundColor = 'black'
    body.style.backgroundColor = 'black'

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

darkmode.addEventListener('change', switchDarkmode)
