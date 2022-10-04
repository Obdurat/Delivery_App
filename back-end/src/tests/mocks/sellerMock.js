const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwibmFtZSI6IkZ1bGFuYSBQZXJlaXJhIiwiZW1haWwiOiJmdWxhbmFAZGVsaXZlcnlhcHAuY29tIiwicm9sZSI6InNlbGxlciIsImlhdCI6MTY2NDc3NTk1MywiZXhwIjoxNjk2MzExOTUzfQ.EYgGsa2geQynHZTLVANjqArkwarKmYw6Nlw9C2WBnzU";

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

module.exports = { token, allSales };
