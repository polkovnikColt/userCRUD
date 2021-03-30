import {Column, PrimaryGeneratedColumn, Entity,ManyToOne} from "typeorm";
import {User} from "../../user/entity/user.entity";

@Entity()
export class Profile {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name:string

    @Column()
    age:number

    @Column()
    city: string

    @Column()
    birthday: string

    @Column()
    gender: string

    @Column()
    role:string

    @ManyToOne(type => User, user => user.profile,{ onDelete: "CASCADE" })
    user: User
}