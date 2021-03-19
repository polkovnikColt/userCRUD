import {Controller, Delete, Get, Param, Post, Put, Req} from '@nestjs/common';
import {ProfileService} from './profile.service';
import {ProfileInterface} from "../types/types";

@Controller('profile')
export class ProfileController {
    constructor(private readonly userService: ProfileService) {
    }

    @Get(':id')
    getUserById(@Param('id') name): Promise<ProfileInterface> {
        return this.userService.getProfileByName(name);
    }

    @Get()
    getAllUsers(): Promise<ProfileInterface> {
        return this.userService.getAllProfiles();
    }

    @Post()
    createProfile(@Req() req):Promise<ProfileInterface>{
        return this.userService.createProfile(req.body);
    }

    @Delete(':id')
    deleteUser(@Param('id') name): Promise<ProfileInterface> {
        return this.userService.deleteProfile(name);
    }

    @Put(':id')
    updateUserCredential(@Param('id') name, @Req() req): Promise<ProfileInterface> {
        return this.userService.updateProfileCredential(name,req.body);
    }
}