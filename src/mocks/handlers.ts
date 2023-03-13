import { rest } from 'msw';

import orders from './orders.json';

export const handlers = [
  rest.get('/orders', (_req, res, ctx) => res(ctx.json(orders))),

  rest.post('/order', (_req, res, ctx) => res(ctx.json('success'))),

  rest.delete('/order', (_req, res, ctx) => res(ctx.json('success'))),
];
