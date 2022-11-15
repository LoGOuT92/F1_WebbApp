import 'reflect-metadata';
import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@ObjectType()
@Entity()

export class Team extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn()
    id!: number ;

    @Field()
    @Column()
    team!: string;

    @Field()
    @Column()
    color!: string;

    @Field()
    @Column()
    imgURL!: string;

    @Field()
    @CreateDateColumn()
    createdAt!: Date;

    @Field()
    @UpdateDateColumn()
    updatedAt!: Date;

}