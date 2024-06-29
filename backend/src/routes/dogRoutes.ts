import express from 'express';
import { Dog } from '../models/dog';
import * as dogMethod from '../services/dogMethod';
const router = express.Router();


router.get('/', async(req, res) => {
    try{
        const dogs = await dogMethod.getAllDog();
        res.json(dogs);
    }
    catch(err) {
        console.error('Request to get Dog failed: ', err);
        res.status(500).send('Internal Server Error');
    }
})

router.post('/add', async (req, res) => {
    try {
        const { name, age } = req.body;
        if(!name || !age) {
            res.status(400).send('name or age of dog can not be empty');
            return;
        }
        const newDog = new Dog(name, age);
        await dogMethod.addDog(newDog);
        res.status(201).send('Dog added successfully');
    } catch (err) {
        console.error('Failed to add dog to database:', err);
        res.status(500).send('Internal Server Error');
    }
});


export default router;