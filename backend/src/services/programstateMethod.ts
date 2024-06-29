import { ProgramState } from "../models/programstate";
import defineConfig from '../mikro-orm.config';
import { MikroORM } from "@mikro-orm/postgresql";

export async function getProgramState(): Promise< ProgramState> {
    const orm = await MikroORM.init(defineConfig);
    try {
        const em = orm.em.fork();
        const programstate = await em.findOneOrFail(ProgramState, {id:1});
        return programstate;
    }
    catch(err) {
        console.error('Failed to get program state');
        throw err;
    }
    finally {
        await orm.close();
    }
}


export async function updateProgrameState(): Promise<void> {
    const orm = await MikroORM.init(defineConfig);
    try {
        const em = orm.em.fork();
        const programstate = await em.findOneOrFail(ProgramState, {id:1});
        programstate.latest_update = new Date(Date.now());
        em.persist(programstate);
        em.flush();
    }
    catch(err) {
        console.error('Failed to update program state: ', err) 
        throw err;
    }
    finally {
        await orm.close();
    }
}

// async function test() {

//     console.log(await getProgramState());
//     await updateProgrameState();
//     console.log(await getProgramState());
// }
// test();
