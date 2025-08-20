import spriteUrl from '/img/sprite.svg';

const iconBurger = `${spriteUrl}#icon-burger-menu`;
const iconClose = `${spriteUrl}#icon-close`;

const burgerBtn = document.querySelector('[data-action="toggle-menu"]');
const mobileMenu = document.querySelector('[data-action="mobile-menu"]');
const useEl = document.querySelector('[data-action="use-burger"]');
const btnForm = document.querySelector('.header-button');

const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    header.classList.add(`scrolled`);
    mobileMenu.classList.add(`scrolled`);
  } else {
    header.classList.remove('scrolled');
    mobileMenu.classList.remove('scrolled');
  }
});

burgerBtn.addEventListener('click', e => {
  const isBurger = useEl.getAttribute('href') === iconBurger;
  useEl.setAttribute('href', isBurger ? iconClose : iconBurger);
  header.classList.toggle(`open`);
  btnForm.classList.add(`form-open`);

  const isActive = mobileMenu.getAttribute('data-active') === 'true';
  mobileMenu.setAttribute('data-active', String(!isActive));
  document.body.setAttribute('data-scroll-locked', String(!isActive));
});

mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', e => {
    mobileMenu.setAttribute('data-active', 'false');
    document.body.setAttribute('data-scroll-locked', 'false');
    useEl.setAttribute('href', iconBurger);
  });
});


window.addEventListener('resize', () => {
  if (window.innerWidth >= 1440) {
    mobileMenu.setAttribute('data-active', 'false');
    document.body.setAttribute('data-scroll-locked', 'false');
    header.classList.remove('open');
    useEl.setAttribute('href', iconBurger);
  }
});