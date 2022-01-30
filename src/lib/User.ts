import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export default class User {

  @PrimaryColumn("int")
  id: number;

  @Column("text")
  email: string;
}
