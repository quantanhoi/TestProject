import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity({tableName:'dog'})
export class Dog {

    @PrimaryKey()
    d_id!: number;
    @Property()
    d_name: string;
    @Property()
    d_age: number;
    
    constructor(name: string, age:number ) {
        this.d_name = name;
        this.d_age = age;
    }
}