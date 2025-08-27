import { brandsCards } from '../arrs/brandsCards.js';

const containerBrands = document.querySelector('.brands-cards-list');

const cardsHtmlBrands = brandsCards.map(({ imgUrl, iconUrl, pageUrl }) => {
  return `
  <li class="brands-card swiper-slide">
    <img class='brands-img' src="${imgUrl}" alt="${imgUrl}" />
    <div class="brands-card-div">
      <img class='brands-svg' src="${iconUrl}" alt="${iconUrl}" />
      <div class="brand-car-more">
        <a href="${pageUrl}">
        Learn more!
        </a>
      </div>
    </div>
  </li>
  `;
});

containerBrands.innerHTML = cardsHtmlBrands.join('');
