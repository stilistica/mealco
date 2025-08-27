import numSandcr from '/img/num-img/sandwiches-crispy.png';
import numSandpulled from '/img/num-img/sandwiches-pulled.png';
import numSandroasted from '/img/num-img/sandwiches-roasted.png';
import numSandspice from '/img/num-img/sandwiches-spice.png';
import numSandthai from '/img/num-img/sandwiches-thai.png';
import numSandspicy from '/img/num-img/sandwiches-spicy.png';

import numBowlscr from '/img/num-img/bowls-crispy.png';
import numBowlsspice from '/img/num-img/bowls-spice.png';
import numBowlsthai from '/img/num-img/bowls-thai.png';
import numBowlssuper from '/img/num-img/bowls-super.png';
import numBowlsroasted from '/img/num-img/bowls-roasted.png';
import numBowlspulled from '/img/num-img/bowls-pulled.png';

export const menuNumList = [
  {
    name: 'Sandwiches',
    items: [
      {
        product: 'Crispy Coconut Tiger Shrimp Sandwich',
        price: '$12.25',
        imgUrl: `${numSandcr}`,
      },
      {
        product: 'Pulled Duroc Pork Sandwich',
        price: '$10.50',
        imgUrl: `${numSandpulled}`,
      },
      {
        product: 'Roasted Vegetable Sandwich',
        price: '$12.00',
        imgUrl: `${numSandroasted}`,
      },
      {
        product: '5-Spice Glazed Pork Belly Sandwich',
        price: '$10.95',
        imgUrl: `${numSandspice}`,
      },
      {
        product: 'Thai Roast Chicken Sandwich',
        price: '$10.50',
        imgUrl: `${numSandthai}`,
      },
      {
        product: 'Spicy Organic Tofu Sandwich',
        price: '$9.75',
        imgUrl: `${numSandspicy}`,
      },
    ],
  },
  {
    name: 'Rice Bowls',
    items: [
      {
        product: 'Crispy Coconut Tiger Shrimp Rice Bowl',
        price: '$14.95',
        imgUrl: `${numBowlscr}`,
      },
      {
        product: '5-Spice Glazed Pork Belly Rice Bowl',
        price: '$14.20',
        imgUrl: `${numBowlsspice}`,
      },
      {
        product: 'Thai Roast Chicken Rice Bowl',
        price: '$14.20',
        imgUrl: `${numBowlsthai}`,
      },
      {
        product: 'Super Grain Tofu Rice Bowl',
        price: '$13.20',
        imgUrl: `${numBowlssuper}`,
      },
      {
        product: 'Roasted Vegetable Rice Bowl',
        price: '$12.00',
        imgUrl: `${numBowlsroasted}`,
      },
      {
        product: 'Pulled Pork Rice Bowl',
        price: '$14.20',
        imgUrl: `${numBowlspulled}`,
      },
    ],
  },
  // {
  //   name: '',
  //   items: [
  //     {
  //       product: 'Greens',
  //       price: '$6.99',
  //       imgUrl: `${pressedJuicesgreens}`,
  //     },
  //   ],
  // },
];
