import nuchasEmpanadasargentine from '/img/nuchas-img/empanadas-argentine.png';
import nuchasEmpanadaschipotie from '/img/nuchas-img/empanadas-chipotie.png';
import nuchasEmpanadasitalian from '/img/nuchas-img/empanadas-italian.png';
import nuchasEmpanadasportobello from '/img/nuchas-img/empanadas-portobello.png';

import nuchasPickOne from '/img/nuchas-img/pick-2.png';
import nuchasPickTwo from '/img/nuchas-img/pick-6.png';
import nuchasPickTree from '/img/nuchas-img/pick-12.png';

export const menuNuchasList = [
  {
    name: 'Empanadas',
    items: [
      {
        product: 'Argentine Beef',
        price: '$4.50',
        imgUrl: `${nuchasEmpanadasargentine}`,
      },
      {
        product: 'Chipotle Chicken',
        price: '$4.50',
        imgUrl: `${nuchasEmpanadaschipotie}`,
      },
      {
        product: 'Italian Sausage',
        price: '$4.50',
        imgUrl: `${nuchasEmpanadasitalian}`,
      },
      {
        product: 'Portobello, Spinach & Mozza',
        price: '$4.50',
        imgUrl: `${nuchasEmpanadasportobello}`,
      },
    ],
  },
  {
    name: 'Mix and Match',
    items: [
      {
        product: 'Pick 2',
        price: '$11.59',
        imgUrl: `${nuchasPickOne}`,
      },
      {
        product: 'Pick 6',
        price: '$31.49',
        imgUrl: `${nuchasPickTwo}`,
      },
      {
        product: 'Pick 12',
        price: '$57.79',
        imgUrl: `${nuchasPickTree}`,
      },
    ],
  },
  // {
  //   name: '',
  //   items: [
  //     {
  //       product: '',
  //       price: '$',
  //       imgUrl: `${}`,
  //     },
  //   ],
  // },
];
