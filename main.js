const openSidebar = document.querySelector('.menu-img');
const closeSidebar = document.querySelector('.close-menu');
const profileCloseBtn = document.querySelector('.profile-close-btn');

const profile = document.querySelector('.profile-img');

const sidebar = document.querySelector('.sidebar');
const profileCard = document.querySelector('.profile-box');
const overlay = document.querySelector('.overlay');

const darkmode = document.getElementById('darkmode');

const body = document.body;

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
  }
  else{
    profileCard.style.backgroundColor = 'white'

  }

}

openSidebar.addEventListener('click', openMenu)
closeSidebar.addEventListener('click', closeMenu)
profile.addEventListener('click', openProfile)
profileCloseBtn.addEventListener('click', closeProfile)
darkmode.addEventListener('change', switchDarkmode)