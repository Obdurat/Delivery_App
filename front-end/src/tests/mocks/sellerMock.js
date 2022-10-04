const address = 'Street Fighter';
const orders = [
  {
    id: 1,
    userId: 3,
    sellerId: 2,
    totalPrice: '6.98',
    deliveryAddress: address,
    deliveryNumber: '123',
    saleDate: '2022-10-04T10:23:21.000Z',
    status: 'Pendente',
  },
  {
    id: 2,
    userId: 3,
    sellerId: 2,
    totalPrice: '6.98',
    deliveryAddress: address,
    deliveryNumber: '123',
    saleDate: '2022-10-04T10:23:22.000Z',
    status: 'Pendente',
  },
];

const orderDetails = {
  id: 1,
  userId: 3,
  sellerId: 2,
  totalPrice: '6.98',
  deliveryAddress: address,
  deliveryNumber: '123',
  saleDate: '2022-10-04T11:01:16.000Z',
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

export { orderDetails, orders };
