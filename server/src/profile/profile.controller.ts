import {Controller, Delete, Get, Param, Post, Put, Req, UseGuards} from '@nestjs/common';
import {ProfileService} from './profile.service';
import {ProfileInterface} from "../types/types";
import {AuthGuard} from "@nestjs/passport";

@Controller('profile')
export class ProfileController {
    constructor(private readonly userService: ProfileService) {
    }

    @UseGuards(AuthGuard('jwt'))
    @Get(':id')
    getUserById(@Param('id') name): Promise<ProfileInterface> {
        return this.userService.getProfileByName(name);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get()
    getAllUsers(): Promise<ProfileInterface> {
        return this.userService.getAllProfiles();
    }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    createProfile(@Req() req):Promise<ProfileInterface>{
        return this.userService.createProfile(req.body);
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    deleteUser(@Param('id') name): Promise<ProfileInterface> {
        return this.userService.deleteProfile(name);
    }

    @UseGuards(AuthGuard('jwt'))
    @Put(':id')
    updateUserCredential(@Param('id') name, @Req() req): Promise<ProfileInterface> {
        return this.userService.updateProfileCredential(name,req.body);
    }
}