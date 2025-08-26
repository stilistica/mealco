import { pressCards } from '../arrs/pressCards.js';

const containerNews = document.querySelector('.list-news');

const cardsHtmlPress = pressCards.map(({ imgUrl, text }) => {
  return `
  <li class="press-card">
    <img src="${imgUrl}" alt="${imgUrl}" />
    <p>${text}</p>
  </li>
  `;
});

const maxItemsPress = containerNews.dataset.max
  ? parseInt(containerNews.dataset.max)
  : cardsHtmlPress.length;

containerNews.innerHTML = cardsHtmlPress.slice(0, maxItemsPress).join('');
