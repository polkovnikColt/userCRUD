import {Entity,PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm';
import {Profile} from '../../profile/entity/profile.entity'
import {UserInterface} from "../../types/types";

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    email:string

    @Column()
    password:string

    @Column()
    role:string

    @OneToMany(type => Profile, profile => profile.user)
    profile: Profile[]
}