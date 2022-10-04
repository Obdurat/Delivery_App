/* eslint-disable max-len */
const customer = {
  user: {
    id: 3,
    name: 'Cliente Zé Birita',
    email: 'zebirita@email.com',
    role: 'customer',
  },
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywibmFtZSI6IkNsaWVudGUgWsOpIEJpcml0YSIsImVtYWlsIjoiemViaXJpdGFAZW1haWwuY29tIiwicm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNjY0ODU0NDIxLCJleHAiOjE2OTYzOTA0MjF9.ggNr004CVivMIxCVh9xLeLt8dIFApHfJrJjaHj8E-Rc',
};

const seller = {
  user: {
    id: 2,
    name: 'Fulana Pereira',
    email: 'fulana@deliveryapp.com',
    role: 'seller',
  },
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwibmFtZSI6IkZ1bGFuYSBQZXJlaXJhIiwiZW1haWwiOiJmdWxhbmFAZGVsaXZlcnlhcHAuY29tIiwicm9sZSI6InNlbGxlciIsImlhdCI6MTY2NDg2NTgxNiwiZXhwIjoxNjk2NDAxODE2fQ.42PJkP3r7wz1IzMeUS4zK9dRa0894UEYoznxwyRmZtQ',
};

const users = {
  customer: {
    email: 'zebirita@email.com',
    password: '$#zebirita#$',
  },
  seller: {
    email: 'fulana@deliveryapp.com',
    password: 'fulana@123',
  },
  administrator: {
    email: 'adm@deliveryapp.com',
    password: '--adm2@21!!--',
  },
};

export { users, customer, seller };
