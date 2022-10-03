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
}];

const loginResponse = [{
  customer: {
    id: 3,
    name: "Cliente Zé Birita",
    email: "zebirita@email.com",
    role: "customer",
  },
}];

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywibmFtZSI6IkNsaWVudGUgWsOpIEJpcml0YSIsImVtYWlsIjoiemViaXJpdGFAZW1haWwuY29tIiwicm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNjY0NzI4NjUwLCJleHAiOjE2OTYyNjQ2NTB9.zrdoeBHkMUxRvecwdZRqqJ7gDuTgiQkOGraYnLMesUw";

module.exports = { users, loginResponse, resolve, token };