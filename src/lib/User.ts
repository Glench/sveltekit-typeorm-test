import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@Entity()
export default class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
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
