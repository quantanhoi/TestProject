import { Dog } from "../models/dog";
import defineConfig from '../mikro-orm.config'
import { MikroORM } from "@mikro-orm/postgresql";


export async function getAllDog(): Promise<Dog[]> {
    const orm = await MikroORM.init(defineConfig);
    try {
        const em = orm.em.fork();
        const dogs = await em.find(Dog, {});
        return dogs;
    }
    catch(err) {
        console.error('Failed to get all dog from database: ', err);
        throw err;
    }
    finally{
        await orm.close();
    }
}


export async function addDog(dog: Dog):Promise<void> {
    const orm = await MikroORM.init(defineConfig);
    try {
        const em = orm.em.fork();
        em.persist(dog);
        await em.flush();
    }
    catch(err) {
        console.error('Failed to add dog to database: ', err);
        throw err;
    }
    finally {
        await orm.close();
    }
}


// async function test() {
    
//     const newDog = new Dog('Haku', 3);
//     await addDog(newDog);
//     console.log(await getAllDog());
// }
// test();