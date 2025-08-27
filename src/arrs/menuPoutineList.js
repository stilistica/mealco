import poutinebacon from '/img/poutine-img/menu-bacon.png';
import poutineclassic from '/img/poutine-img/menu-classic.png';
import poutinechicken from '/img/poutine-img/menu-chicken.png';
import poutineribs from '/img/poutine-img/menu-ribs.png';
import poutinepork from '/img/poutine-img/menu-pork.png';

export const menuPoutineList = [
  {
    name: 'Poutines',
    items: [
      {
        product: 'Bacon',
        price: '$11.00',
        imgUrl: `${poutinebacon}`,
      },
      {
        product: 'Classic',
        price: '$13.00',
        imgUrl: `${poutineclassic}`,
      },
      {
        product: 'Savory Chicken',
        price: '$14.00',
        imgUrl: `${poutinechicken}`,
      },
      {
        product: 'Short Ribs',
        price: '$16.00',
        imgUrl: `${poutineribs}`,
      },
      {
        product: 'Smoked Pork',
        price: '$15.00',
        imgUrl: `${poutinepork}`,
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
