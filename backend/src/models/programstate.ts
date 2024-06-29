import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import 'reflect-metadata';
@Entity({tableName: 'programstate'})
export class ProgramState {
    @PrimaryKey()
    id!: number;

    @Property()
    latest_update: Date;
    constructor(latest_update: Date) {
        this.latest_update = latest_update;
    }
}