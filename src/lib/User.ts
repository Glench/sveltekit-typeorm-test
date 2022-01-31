import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@Entity()
export default class User extends BaseEntity {

    @PrimaryGeneratedColumn("int")
    id: number;

    @Column("text")
    email: string;
}

// alternate way to do typeorm definition
// @Entity()
// export default class User {
//
//     @PrimaryGeneratedColumn()
//     id: number;
//
//     @Column()
//     email: string;
// }
