const customerResponse = [{
  id: 1,
  name: "Delivery App Admin",
  email: "adm@deliveryapp.com",
  password: "a4c86edecc5aee06eff8fdeda69e0d04",
  role: "administrator",
}, {
  id: 2,
  name: "Fulana Pereira",
  email: "fulana@deliveryapp.com",
  password: "3c28d2b0881bf46457a853e0b07531c6",
  role: "seller",
}, {
  id: 3,
  name: "Cliente Zé Birita",
  email: "zebirita@email.com",
  password: "1c37466c159755ce1fa181bd247cb925",
  role: "customer",
}];

const newSale = {
  products: [{
    productId: 3,
    quantity: 1,
  }, {
    productId: 6,
    quantity: 2,
  }],
  sale: {
    deliveryAddress: "Street Fighter",
    deliveryNumber: "123",
    sellerId: "2",
    totalPrice: "6.98",
  },
};

const allSales = {
  id: 1,
  userId: 3,
  sellerId: 2,
  totalPrice: '6.98',
  deliveryAddress: 'Street Fighter',
  deliveryNumber: '123',
  saleDate: '',
  status: 'Pendente',
  products: [{
    id: 3,
    name: 'Antarctica Pilsen 300ml',
    price: '2.49',
    urlImage: 'http://localhost:3001/images/antarctica_pilsen_300ml.jpg',
    salesProducts: {
      saleId: 1,
      productId: 3,
      quantity: 1,
    },
  }, {
    id: 6,
    name: 'Skol Beats Senses 313ml',
    price: '4.49',
    urlImage: 'http://localhost:3001/images/skol_beats_senses_313ml.jpg',
    salesProducts: {
      saleId: 1,
      productId: 6,
      quantity: 2,
    },
  }],
};

module.exports = { customerResponse, newSale, allSales };
