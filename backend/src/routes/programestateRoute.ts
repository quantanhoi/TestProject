import express from 'express';
import * as programestateMethod from '../services/programstateMethod'; // Adjust the path as necessary

const router = express.Router();


router.get('/', async (req, res) => {
    try {
        const programState = await programestateMethod.getProgramState();
        res.json(programState);
    } catch (err) {
        console.error('Failed to get program state:', err);
        res.status(500).send('Internal Server Error');
    }
});


router.put('/', async (req, res) => {
    try {
        await programestateMethod.updateProgrameState();
        res.status(200).send('Program state updated successfully');
    } catch (err) {
        console.error('Failed to update program state:', err);
        res.status(500).send('Internal Server Error');
    }
});

export default router;
