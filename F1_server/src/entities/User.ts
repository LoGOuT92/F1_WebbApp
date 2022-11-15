import 'reflect-metadata';
import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@ObjectType()
@Entity()

export class User extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn()
    id!: number ;

    @Field(()=>String)
    @Column({unique: true})
    username!: string ;

    @Field(()=>String)
    @Column({unique: true})
    email!: string;

    @Column()
    password!: string;

    @Field()
    @CreateDateColumn()
    createdAt!: Date;

    @Field()
    @UpdateDateColumn()
    updatedAt!: Date;

}