import { rest } from 'msw';
import { getUser } from '../../../utils/localStorage';
import allUsers from '../adminMock';
import {
  sales,
  users,
  checkoutResponse,
  customerOrderDetails,
} from '../customerMock';
import products from '../productsMock';
import { response } from '../registerMock';
import { orders, orderDetails } from '../sellerMock';

const BASE_URL = 'http://localhost:3001';
const code = {
  OK: 200,
  CREATED: 201,
};

const handlers = [
  rest.post(`${BASE_URL}/login`, (_req, res, ctx) => res(
    ctx.status(code.OK),
    ctx.json(getUser()),
  )),
  rest.post(`${BASE_URL}/register`, (_req, res, ctx) => res(
    ctx.status(code.CREATED),
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
  rest.get(`${BASE_URL}/customer`, (_req, res, ctx) => res(
    ctx.status(code.OK),
    ctx.json(users),
  )),
  rest.post(`${BASE_URL}/customer/checkout`, (_req, res, ctx) => res(
    ctx.status(code.CREATED),
    ctx.json(checkoutResponse),
  )),
  rest.get(`${BASE_URL}/customer/sales`, (_req, res, ctx) => res(
    ctx.status(code.OK),
    ctx.json(sales),
  )),
  rest.get(`${BASE_URL}/customer/sales/:id`, (_req, res, ctx) => res(
    ctx.status(code.OK),
    ctx.json(customerOrderDetails),
  )),
  rest.get(`${BASE_URL}/seller/orders`, (_req, res, ctx) => res(
    ctx.status(code.OK),
    ctx.json(orders),
  )),
  rest.get(`${BASE_URL}/seller/orders/:id`, (_req, res, ctx) => res(
    ctx.status(code.OK),
    ctx.json(orderDetails),
  )),
];

export default handlers;
