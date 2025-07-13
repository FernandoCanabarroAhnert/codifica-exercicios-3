const menuButton = document.querySelector('.header__button');
const asideMenu = document.querySelector('.aside-menu');
const shadow = document.querySelector('.shadow');

const handleMenuClick = () => {
    asideMenu.classList.toggle('active');
    menuButton.textContent = asideMenu.classList.contains('active') ? 'close' : 'dehaze';
    shadow.classList.toggle('active');
}
menuButton.addEventListener('click', handleMenuClick);
