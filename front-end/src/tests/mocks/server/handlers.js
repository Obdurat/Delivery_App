import { rest } from 'msw';
import { getUser } from '../../../utils/localStorage';
import allUsers from '../adminMock';
import sales from '../customerMock';
import products from '../productsMock';
import { response } from '../registerMock';

const BASE_URL = 'http://localhost:3001';
const code = {
  OK: 200,
};

const handlers = [
  rest.post(`${BASE_URL}/login`, (_req, res, ctx) => res(
    ctx.status(code.OK),
    ctx.json(getUser()),
  )),
  rest.post(`${BASE_URL}/register`, (_req, res, ctx) => res(
    ctx.status(code.OK),
    ctx.json(response),
  )),
  rest.post(`${BASE_URL}/products`, (_req, res, ctx) => res(
    ctx.status(code.OK),
    ctx.json(products),
  )),
  rest.get(`${BASE_URL}/admin/manage/users`, (_req, res, ctx) => res(
    ctx.status(code.OK),
    ctx.json(allUsers),
  )),
  rest.get(`${BASE_URL}/customer/sales`, (_req, res, ctx) => res(
    ctx.status(code.OK),
    ctx.json(sales),
  )),
];

export default handlers;
