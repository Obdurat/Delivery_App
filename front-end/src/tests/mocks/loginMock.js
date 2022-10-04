/* eslint-disable max-len */
const customer = {
  user: {
    id: 3,
    name: 'Cliente Zé Birita',
    email: 'zebirita@email.com',
    role: 'customer',
  },
  token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywibmFtZSI6IkNsaWVudGUgWsOp
  IEJpcml0YSIsImVtYWlsIjoiemViaXJpdGFAZW1
  haWwuY29tIiwicm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNjY0ODU0NDIxLCJ
  leHAiOjE2OTYzOTA0MjF9.ggNr004CVivMIxCVh9xLeLt8dIFApHfJrJjaHj8E-Rc`,
};

const seller = {
  user: {
    id: 2,
    name: 'Fulana Pereira',
    email: 'fulana@deliveryapp.com',
    role: 'seller',
  },
  token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwibmFtZSI6IkZ1bGFuYSBQZXJl
  aXJhIiwiZW1haWwiOiJmdWxhbmFAZGVsaXZlcnlhcHAuY
  29tIiwicm9sZSI6InNlbGxlciIsImlhdCI6MTY2NDg2NTgxNiwiZX
  hwIjoxNjk2NDAxODE2fQ.42PJkP3r7wz1IzMeUS4zK9dRa0894UEYoznxwyRmZtQ`,
};

const administrator = {
  user: {
    id: 1,
    name: 'Delivery App Admin',
    email: 'adm@deliveryapp.com',
    role: 'administrator',
  },
  token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IkRlbGl2ZXJ5I
  EFwcCBBZG1pbiIsImVtYWlsIjoiYWRtQGRlbGl2ZXJ5YXB
  wLmNvbSIsInJvbGUiOiJhZG1pbmlzdHJhdG9yIiwiaWF0IjoxNjY0ODY
  4OTk0LCJleHAiOjE2OTY0MDQ5OTR9.OkE-iPfwmrX12SGJ5j_Q-5EdOxXj8SbHFlrdYSEicYw`,
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

export { users, customer, seller, administrator };
