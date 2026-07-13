document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      if (mobileMenu.style.maxHeight === '0px' || !mobileMenu.style.maxHeight) {
        mobileMenu.style.maxHeight = '400px';
      } else {
        mobileMenu.style.maxHeight = '0px';
      }
    });
  }
});
