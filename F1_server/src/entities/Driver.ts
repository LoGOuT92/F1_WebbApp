import 'reflect-metadata';
import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@ObjectType()
@Entity()

export class Driver extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn()
    id!: number ;

    @Field()
    @Column()
    name!: string;

    @Field()
    @Column()
    surName!: string;

    @Field()
    @Column()
    team!: string;

    @Field()
    @Column()
    color!: string;

    @Field()
    @CreateDateColumn()
    createdAt!: Date;

    @Field()
    @UpdateDateColumn()
    updatedAt!: Date;

}