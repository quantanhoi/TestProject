import request from 'supertest';
import express from 'express';
import programStateRoutes from '../src/routes/programestateRoute'; 
import * as programestateMethod from '../src/services/programstateMethod'; 
const app = express();
app.use(express.json()); 
app.use('/programstate', programStateRoutes);

describe('Program State Routes', () => {
    it('should return program state on GET /programstate', async () => {
        const mockProgramState = { id: 1, latest_update: new Date() };
        jest.spyOn(programestateMethod, 'getProgramState').mockResolvedValue(mockProgramState);

        const response = await request(app).get('/programstate');
        expect(response.status).toBe(200);
        // Convert dates to ISO strings for comparison
        expect(response.body).toEqual({
            id: mockProgramState.id,
            latest_update: mockProgramState.latest_update.toISOString(),
        });
    });

    it('should return 500 if there is an error in GET /programstate', async () => {
        // Mock the method to throw an error
        jest.spyOn(programestateMethod, 'getProgramState').mockImplementation(() => {
            throw new Error('Internal Server Error');
        });

        const response = await request(app).get('/programstate');
        expect(response.status).toBe(500);
        expect(response.text).toBe('Internal Server Error');
    });

    it('should update program state on PUT /programstate', async () => {
        // Mock the method to resolve successfully
        jest.spyOn(programestateMethod, 'updateProgrameState').mockResolvedValue();

        const response = await request(app).put('/programstate');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Program state updated successfully');
    });

    it('should return 500 if there is an error in PUT /programstate', async () => {
        // Mock the method to throw an error
        jest.spyOn(programestateMethod, 'updateProgrameState').mockImplementation(() => {
            throw new Error('Internal Server Error');
        });

        const response = await request(app).put('/programstate');
        expect(response.status).toBe(500);
        expect(response.text).toBe('Internal Server Error');
    });
});
