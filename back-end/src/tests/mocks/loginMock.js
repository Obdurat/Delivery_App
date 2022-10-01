const users = [{
  customer: {
    email: "zebirita@email.com",
    password: "$#zebirita#$",
  },
  seller: {
    email: 'fulana@deliveryapp.com',
    password: 'fulana@123',
  },
  administrator: {
    email: 'adm@deliveryapp.com',
    password: '--adm2@21!!--',
  },
}];

const resolve = [{
  customer: {
    id: 3,
    name: "Cliente Zé Birita",
    email: "zebirita@email.com",
    password: "1c37466c159755ce1fa181bd247cb925",
    role: "customer",
  },
}]

const loginResponse = [{
  customer: {
    id: 3,
    name: "Cliente Zé Birita",
    email: "zebirita@email.com",
    role: "customer",
  },
}]

module.exports = { users, loginResponse, resolve };