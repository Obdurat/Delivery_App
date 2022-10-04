import { rest } from 'msw';
import { customer } from '../loginMock';

const BASE_URL = 'http://localhost:3001';
const code = 200;

const handlers = [
  rest.post(`${BASE_URL}/login`, (_req, res, ctx) => res(
    ctx.status(code),
    ctx.json(customer),
  )),
];

export default handlers;
