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
    getUserProfilesById(@Param('id') id): Promise<ProfileInterface[]> {
        return this.userService.getProfileById(id);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get()
    getAllProfiles(): Promise<ProfileInterface> {
        return this.userService.getAllProfiles();
    }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    createProfile(@Req() req):Promise<ProfileInterface>{
        return this.userService.createProfile(req.body);
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    deleteUser(@Param('id') id): Promise<ProfileInterface> {
        return this.userService.deleteProfile(id);
    }

    @UseGuards(AuthGuard('jwt'))
    @Put(':id')
    updateUserCredential(@Param('id') id, @Req() req): Promise<ProfileInterface> {
        return this.userService.updateProfileCredential(id,req.body);
    }
}