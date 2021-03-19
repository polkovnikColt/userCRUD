import {Column, PrimaryGeneratedColumn, Entity,ManyToOne} from "typeorm";
import {User} from "../../user/entity/user.entity";

@Entity()
export class Profile {
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
    role: string

    @Column()
    gender: string

    @ManyToOne(() => User, user => user.id)
    user_id: number
}