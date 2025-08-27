import mochidokiube from '/img/mochodoki-img/flavors-ube.png';
import mochidokistrawberry from '/img/mochodoki-img/flavors-strawberry.png';
import mochidokivegan from '/img/mochodoki-img/flavors-vegan.png';
import mochidokimatchs from '/img/mochodoki-img/flavors-matchs.png';
import mochidokiVanilla from '/img/mochodoki-img/flavors-vanilla.png';

export const menuMochidokiList = [
  {
    name: 'Mochi Flavors',
    items: [
      {
        product: 'Ube (4ct)',
        price: '$12',
        imgUrl: `${mochidokiube}`,
      },
      {
        product: 'Strawberry (4ct)',
        price: '$12',
        imgUrl: `${mochidokistrawberry}`,
      },
      {
        product: 'Vegan Mango (4ct)',
        price: '$12',
        imgUrl: `${mochidokivegan}`,
      },
      {
        product: 'Matcha (4ct)',
        price: '$12',
        imgUrl: `${mochidokimatchs}`,
      },
      {
        product: 'Vanilla Chip (4ct)',
        price: '$12',
        imgUrl: `${mochidokiVanilla}`,
      },
    ],
  },
];
