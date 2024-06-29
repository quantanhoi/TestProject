import { Options, defineConfig } from "@mikro-orm/core";
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { PostgreSqlDriver } from "@mikro-orm/postgresql";
import { Dog } from "./models/dog";
import { ProgramState } from "./models/programstate";

export default defineConfig ({
    driver: PostgreSqlDriver,
    dbName: 'postgres',
    host: '127.0.0.1',
    port: 5433, 
    user: 'user',
    password: 'postgres',
    entitiesTs: [Dog, ProgramState],
    entities: [Dog,ProgramState],
    metadataProvider: TsMorphMetadataProvider,
    debug: true,
});


