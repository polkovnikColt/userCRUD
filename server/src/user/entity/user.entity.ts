import {Entity,PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm';
import {Profile} from '../../profile/entity/profile.entity'

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

    @OneToMany(()=> Profile, profile => profile.id)
    profile_id: number[]
}