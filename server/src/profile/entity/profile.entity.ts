import {Column, PrimaryGeneratedColumn, Entity,ManyToOne} from "typeorm";
import {User} from "../../user/entity/user.entity";

@Entity()
export class Profile {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    city: string

    @Column()
    birthday: string

    @Column()
    gender: string

    @ManyToOne(() => User, user => user.id)
    user: number
}