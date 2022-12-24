const mobileButton = document.querySelector('.mobile-menu');

const toggleMenu = () => {
  const navList = document.querySelector('.nav-list > ul');

  navList.classList.toggle('open');
  mobileButton.classList.toggle('active');
}

mobileButton.addEventListener('click', toggleMenu);