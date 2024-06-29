import request from 'supertest';
import express from 'express';
import dogRoutes from '../src/routes/dogRoutes';
import * as dogMethod from '../src/services/dogMethod'

const app = express();
app.use(express.json());
app.use('/dogs', dogRoutes);

describe('Dog Routes', () => {
    it('should return all dogs on GET /dogs', async () => {
        const response = await request(app).get('/dogs');
        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
    });

    it('should add a new dog on POST /dogs/add', async () => {
        const newDog = { name: 'Buddy', age: 3 };
        const response = await request(app)
            .post('/dogs/add')
            .send(newDog);
        expect(response.status).toBe(201);
        expect(response.text).toBe('Dog added successfully');
    });

    it('should return 400 if name or age is missing on POST /dogs/add', async () => {
        const response = await request(app).post('/dogs/add').send({});
        expect(response.status).toBe(400);
        expect(response.text).toBe('name or age of dog can not be empty');
    });

    it('should return 500 on internal server error', async () => {
        // Mock the method to throw an error
        jest.spyOn(dogMethod, 'getAllDog').mockImplementation(() => {
            throw new Error('Internal Server Error');
        });

        const response = await request(app).get('/dogs');
        expect(response.status).toBe(500);
        expect(response.text).toBe('Internal Server Error');
    });
});
