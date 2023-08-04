import app from '../app';
import request from 'supertest';
import { Sequelize } from 'sequelize';
import { expect, jest, test } from '@jest/globals';

const mockResponse = [
	{
		diet_id: 2,
		diet: 'vegetarian',
		createdAt: '2023-08-03T13:01:59.553Z',
		updatedAt: '2023-08-03T13:01:59.553Z',
	},
	{
		diet_id: 3,
		diet: 'vegan',
		createdAt: '2023-08-03T13:01:59.553Z',
		updatedAt: '2023-08-03T13:01:59.553Z',
	},
];

jest.mock('sequelize', () => {
	const mSequelize = {
		authenticate: jest.fn(),
		define: jest.fn(),
	};
	const actualSequelize: any = jest.requireActual('sequelize');
	return { Sequelize: jest.fn(() => mSequelize), DataTypes: actualSequelize.DataTypes };
});

const mSequelizeContext = new Sequelize({ host: 'localhost', dialect: 'postgres', database: 'test', username: 'root', storage: ':memory:' });

beforeEach(() => {
	jest.clearAllMocks();
	jest.mocked(mSequelizeContext.define).mockImplementation((): any => {
		return jest.fn(() => mockResponse);
	});
});

describe('getAllDiets', () => {
	test('It should respond with a 200 status code', async () => {
		// Act
		const response = await request(app).get('/api/diets');

		// Assert
		expect(response.statusCode).toEqual(200);
	});

	test('It should return a diet list', async () => {
		// Arrange
		// Act
		const response = await request(app).get('/api/diets');

		// Assert
		expect(response.body).toEqual(mockResponse);
	});
});
