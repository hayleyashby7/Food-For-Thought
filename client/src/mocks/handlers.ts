import { rest } from 'msw';

export const handlers = [
	rest.get('https://localhost:3000/api/diets', (_req, res, ctx) => {
		return res(ctx.json(['ketogenic', 'vegetarian']));
	}),
];
