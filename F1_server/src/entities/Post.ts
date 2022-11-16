import 'reflect-metadata';
import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@ObjectType()
@Entity()

export class Post extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn()
    id!: number ;

    @Field()
    @Column()
    title!: string;

    @Field()
    @Column()
    content!: string;

    @Field()
    @Column()
    imgURL!: string;

    @Field()
    @Column()
    type!: string;

    @Field()
    @CreateDateColumn()
    createdAt!: Date;

    @Field()
    @UpdateDateColumn()
    updatedAt!: Date;

}