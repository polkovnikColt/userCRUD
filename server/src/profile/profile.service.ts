import {Injectable} from '@nestjs/common';
import {Profile} from './entity/profile.entity';
import {getManager} from "typeorm/index";
import {ProfileInterface} from "../types/types";

@Injectable()
export class ProfileService {
    private readonly manager;

    constructor() {
        this.manager = getManager();
    }

    async getProfileById(id: string): Promise<ProfileInterface[]> {
        return await this.manager.find(Profile, {
            where: {
                user: id
            }
        });
    }

    async getAllProfiles(): Promise<ProfileInterface> {
        return await this.manager
            .createQueryBuilder()
            .select('profile')
            .from(Profile, 'profile')
            .getMany();
    }

    async createProfile(body: ProfileInterface): Promise<ProfileInterface> {
        console.log(body);
        await this.manager.insert(Profile, body);
        return body;
    }

    async deleteProfile(id: string): Promise<ProfileInterface> {
        return this.manager
            .delete(Profile, {id: id});
    }

    async updateProfileCredential(id: string, body: Body): Promise<ProfileInterface> {
        return this.manager
            .update(Profile, {id: id}, body);
    }
}