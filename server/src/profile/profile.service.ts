import { Injectable } from '@nestjs/common';
import {Profile} from './entity/profile.entity';
import {getManager} from "typeorm/index";
import {ProfileInterface} from "../types/types";

@Injectable()
export class ProfileService {
    private readonly manager;

    constructor() {
        this.manager = getManager();
    }

    async getProfileByName(name:string): Promise<ProfileInterface> {
       return await this.manager.findOne({name:name});
    }

    async getAllProfiles():Promise<ProfileInterface> {
        return await this.manager
            .createQueryBuilder()
            .select('profile')
            .from(Profile,'profile')
            .getMany();
    }

    async createProfile(body:Body):Promise<ProfileInterface>{
        return await this.manager.insert(Profile, body)
    }

    async deleteProfile(name:string):Promise<ProfileInterface> {
        return this.manager
            .delete(Profile,{name:name});
    }

    async updateProfileCredential(name:string, body: Body):Promise<ProfileInterface>{
        return this.manager.update(Profile, {name:name}, body);
    }
}