//Set global theme for light or dark mode
export const setTheme = (themeSetting) => {
  const themeButton = document.querySelector('#theme-switch');
  const themeText = document.querySelector('#theme-text');
  const orb = document.querySelector('#orb');

  if (themeSetting === 'dark') {
    //Set to Dark
    document.documentElement.style.setProperty('--color-text', 'white');
    document.documentElement.style.setProperty('--color-background', '#131931');
    document.documentElement.style.setProperty('--tab-color', '#191d2d');
    // document.documentElement.style.setProperty('--form-shadow', '#131830');
    document.querySelector('.logo-back').style.backgroundColor = '#131830';
    document.querySelector('.logo-back').style.boxShadow =
      '0 0 8px 1px var(--color-accent-medium)';
    // document.querySelector('#cont-form').style.boxShadow =
    //   '0 0 8px 1px var(--color-background)';
    themeButton.style.backgroundColor = '#f8f8f8';
    themeButton.style.color = '#131830';
    themeButton.style.opacity = '0.8';
    themeText.innerText = 'LIGHT THEME';
    orb.style.transform = 'translateX(0%)';
  } else {
    //Set to Light
    document.documentElement.style.setProperty('--color-text', '#131931');
    document.documentElement.style.setProperty(
      '--color-background',
      'var(--gray-0)'
    );
    document.documentElement.style.setProperty('--tab-color', '#1f2952');

    // document.documentElement.style.setProperty(
    //   '--form-shadow',
    //   'rgba(178, 177, 177, 0.638)'
    // );

    document.querySelector('.logo-back').style.backgroundColor =
      'var(--color-accent-light)';
    document.querySelector('.logo-back').style.boxShadow =
      '0 0 8px 1px var(--gray-5)';
    // document.querySelector('#cont-form').style.boxShadow =
    //   '0 2px 12px 4px rgba(178, 177, 177, 0.638)';
    themeButton.style.backgroundColor = '#1f2952';
    themeButton.style.color = 'var(--gray-1)';
    themeButton.style.opacity = '1.0';
    themeText.innerText = 'DARK THEME';
    orb.style.transform = 'translateX(650%)';
  }
};

// Load listeners for all pages
export const loadListeners = () => {
  //Load universal elements
  const navbar = document.querySelector('#navbar');
  const navButton = document.querySelector('#nav-btn');
  const menuIcon = document.querySelector('#menu-icon');
  const topBar = document.querySelector('#top-bar');
  const middleBar = document.querySelector('#middle-bar');
  const bottomBar = document.querySelector('#bottom-bar');
  const b1 = document.querySelector('#b1');
  const b2 = document.querySelector('#b2');
  const b3 = document.querySelector('#b3');
  const header = document.querySelector('#header');

  //Theme Switch Button
  document.querySelector('#theme-switch').onclick = () => {
    if (localStorage.getItem('theme') === 'dark') {
      localStorage.setItem('theme', 'light');
    } else {
      localStorage.setItem('theme', 'dark');
    }
    setTheme(localStorage.getItem('theme'));
  };

  //Bottom border for fixed header
  document.addEventListener('scroll', (e) => {
    if (window.scrollY != 0) {
      header.classList.add('header-border');
      console.log(window.scrollY);
    } else {
      header.classList.remove('header-border');
    }
  });

  navButton.addEventListener('click', () => {
    //Open
    if (navbar.dataset.open === 'false') {
      navbar.dataset.open = 'true';
      navbar.style.transform = 'translateX(0%)';

      topBar.style.opacity = '0';
      b1.className = 'menu-bar top-shift';
      b2.style.opacity = '0';
      b3.className = 'menu-bar bottom-shift';
      bottomBar.style.opacity = '0';

      // navbar.style.display = 'flex';
      // navButton.style.display = 'block';
      // middleBar.style.display = 'none';
      // topBar.style.transform = 'rotate(45deg)';
      // topBar.style.transformOrigin = 'top left';
      // bottomBar.style.transform = 'rotate(-45deg)';
      // bottomBar.className = 'menu-bar bottom-tilt';
      // topBar.className = 'menu-bar top-tilt';
      // menuIcon.className = 'fa-solid fa-xmark';
    } else {
      //Closed
      navbar.dataset.open = 'false';
      navbar.style.transform = 'translateX(100%)';
      setTimeout(() => {
        topBar.style.opacity = '1';
        b1.className = '';
        b2.style.opacity = '1';
        b3.className = '';
        bottomBar.style.opacity = '1';
      }, 200);
    }
  });
};
