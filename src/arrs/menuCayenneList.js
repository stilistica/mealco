import cayenneSandMild from '/img/cayenne-img/sandwiches-mild.png';

import cayennesidesfries from '/img/cayenne-img/sides-fries.png';
import cayennesidesspiced from '/img/cayenne-img/sides-spiced.png';

import cayennebeveragescoke from '/img/cayenne-img/beverages-coke.png';
import cayennebeveragesdiet from '/img/cayenne-img/beverages-diet.png';
import cayennebeveragessprite from '/img/cayenne-img/beverages-sprite.png';

export const menuCayenneList = [
  {
    name: 'Sandwiches',
    items: [
      {
        product: 'Mild or Spicy topped with pickles',
        price: '$12.95',
        imgUrl: `${cayenneSandMild}`,
      },
      {
        product: 'Chicken With Cheese',
        price: '$11.95',
        imgUrl: ' ',
      },
      {
        product: 'Classic Crispy Chicken',
        price: '$11.95',
        imgUrl: ' ',
      },
      {
        product: 'Chicken Bacon Ranch',
        price: '$14.95',
        imgUrl: ' ',
      },
    ],
  },
  {
    name: 'Sides',
    items: [
      {
        product: 'Fries',
        price: '$4.50',
        imgUrl: `${cayennesidesfries}`,
      },
      {
        product: 'Spiced Fries',
        price: '$4.95',
        imgUrl: `${cayennesidesspiced}`,
      },
      {
        product: 'Comeback Sauce',
        price: '$0.60',
        imgUrl: ' ',
      },
      {
        product: 'Ranch',
        price: '$0.60',
        imgUrl: ' ',
      },
      {
        product: 'Mayo',
        price: '$0.50',
        imgUrl: ' ',
      },
      {
        product: 'Ketchup',
        price: '$0.50',
        imgUrl: ' ',
      },
    ],
  },
  {
    name: 'Beverages',
    items: [
      {
        product: 'Coke',
        price: '$2.00',
        imgUrl: `${cayennebeveragescoke}`,
      },
      {
        product: 'Diet Coke',
        price: '$2.00',
        imgUrl: `${cayennebeveragesdiet}`,
      },
      {
        product: 'Sprite',
        price: '$2.00',
        imgUrl: `${cayennebeveragessprite}`,
      },
    ],
  },
  // {
  //   name: '',
  //   items: [
  //     {
  //       product: '',
  //       price: '',
  //       imgUrl: '',
  //     },
  //   ],
  // },
]