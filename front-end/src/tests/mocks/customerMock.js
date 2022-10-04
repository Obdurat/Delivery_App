const address = 'Street Fighter';

const sales = [
  {
    id: 1,
    userId: 3,
    sellerId: 2,
    totalPrice: '6.98',
    deliveryAddress: address,
    deliveryNumber: '123',
    saleDate: '2022-10-04T07:46:35.000Z',
    status: 'Pendente',
  },
  {
    id: 2,
    userId: 3,
    sellerId: 2,
    totalPrice: '6.98',
    deliveryAddress: address,
    deliveryNumber: '123',
    saleDate: '2022-10-04T07:46:36.000Z',
    status: 'Pendente',
  },
];

const users = [
  {
    id: 1,
    name: 'Delivery App Admin',
    email: 'adm@deliveryapp.com',
    password: 'a4c86edecc5aee06eff8fdeda69e0d04',
    role: 'administrator',
  },
  {
    id: 2,
    name: 'Fulana Pereira',
    email: 'fulana@deliveryapp.com',
    password: '3c28d2b0881bf46457a853e0b07531c6',
    role: 'seller',
  },
  {
    id: 3,
    name: 'Cliente Zé Birita',
    email: 'zebirita@email.com',
    password: '1c37466c159755ce1fa181bd247cb925',
    role: 'customer',
  },
];

const checkoutResponse = [
  {
    saleId: 9,
    productId: 3,
    quantity: 1,
  },
  {
    saleId: 9,
    productId: 6,
    quantity: 2,
  },
];

const customerOrderDetails = {
  id: 1,
  userId: 3,
  sellerId: 2,
  totalPrice: '6.98',
  deliveryAddress: address,
  deliveryNumber: '123',
  saleDate: '2022-10-04T11:45:40.000Z',
  status: 'Pendente',
  products: [
    {
      id: 3,
      name: 'Antarctica Pilsen 300ml',
      price: '2.49',
      urlImage: 'http://localhost:3001/images/antarctica_pilsen_300ml.jpg',
      salesProducts: {
        saleId: 1,
        productId: 3,
        quantity: 1,
      },
    },
    {
      id: 6,
      name: 'Skol Beats Senses 313ml',
      price: '4.49',
      urlImage: 'http://localhost:3001/images/skol_beats_senses_313ml.jpg',
      salesProducts: {
        saleId: 1,
        productId: 6,
        quantity: 2,
      },
    },
  ],
};

export {
  sales,
  users,
  checkoutResponse,
  customerOrderDetails,
};
