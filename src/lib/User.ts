import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export default class User {

    @PrimaryColumn()
    id: number;

    @Column()
    email: string;
}
