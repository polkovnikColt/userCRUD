import {Injectable} from '@nestjs/common';
import {getManager} from "typeorm/index";
import { UserInterface} from "../types/types";
import {User} from "./entity/user.entity";

@Injectable()
export class UserService {
    private readonly manager;

    constructor() {
        this.manager = getManager();
    }

    async getUserByName(email: string): Promise<UserInterface> {
        return await this.manager
            .findOne(User, {email: email});
    }

    async getAllUsers(): Promise<UserInterface[]> {
        return await this.manager
            .createQueryBuilder()
            .select('user')
            .from(User, 'user')
            .getMany();
    }


    async deleteUser(email: string): Promise<UserInterface> {
        return await this.manager.delete(User, {email: email});
    }

    async updateUserCredential(email: string, body: Body): Promise<UserInterface> {
        return await this.manager.update(User, {email: email}, body);
    }
}