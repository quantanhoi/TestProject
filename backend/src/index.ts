import { MikroORM } from "@mikro-orm/core";
import * as dogMethod from './services/dogMethod';
import * as programestateMethod from './services/programstateMethod';
import express from 'express';
import cors from 'cors';
import dogRoute from './routes/dogRoutes'
import programestateRoute from './routes/programestateRoute'

const app = express();
app.use(cors());
const port = 3001;
app.use(express.json());
app.use('/api/dogs', dogRoute);
app.use('/api/state', programestateRoute)
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
