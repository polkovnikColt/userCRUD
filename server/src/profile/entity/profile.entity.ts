import {Column, PrimaryGeneratedColumn, Entity} from "typeorm";

@Entity()
export class ProfileEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    email: string

    @Column()
    password: string

    @Column()
    city: string

    @Column()
    birthday: string

    @Column()
    role: 'user' | 'admin'

    @Column()
    gender: 'male' | 'female'

}