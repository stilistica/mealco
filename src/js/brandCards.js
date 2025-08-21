import { brandsCards } from '../arrs/brandsCards.js';

const containerBrands = document.querySelector('.brands-cards-list');

const cardsHtmlBrands = brandsCards.map(({ imgUrl, iconUrl, pageUrl }) => {
  return `
  <li class="brands-card swiper-slide">
    <img src="${imgUrl}" alt="${imgUrl}" />
    <svg>
      <use href="${iconUrl}"></use>
    </svg>
    <a href="${pageUrl}">
    Learn more!
    </a>
  </li>
  `;
});

containerBrands.innerHTML = cardsHtmlBrands.join('');
