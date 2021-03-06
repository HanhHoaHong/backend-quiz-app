/* eslint-disable prettier/prettier */
import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('quizes')

export class Quiz extends BaseEntity{
    @PrimaryGeneratedColumn({
        comment: 'The quiz unique indentifier',

    })
    id:number;
    @Column({
        type:'varchar',
    })

    title:string;

    @Column({
        type:'text',
    })
    description:string;

    @Column({
        type:'boolean',
        default: 1,
    })
    isActive:boolean;
}