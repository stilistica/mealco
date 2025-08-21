import { benefitCards } from '../arrs/benefitCards.js';

const containerBenefit = document.querySelector('.ben-list');

const cardsHtmlBenefits = benefitCards.map(({iconUrl, title, text}) => {
  return `
  <li class="ben-card">
    <svg>
      <use href="${iconUrl}"></use>
    </svg>
    <div class="ben-text">
      <h3>${title}</h3>
      <p>${text}</p>
    </div>
  </li>
  `;
});

containerBenefit.innerHTML = cardsHtmlBenefits.join("");
