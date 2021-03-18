import {Controller, Delete, Get, Param, Put} from '@nestjs/common';
import {ProfileService} from './profile.service';

@Controller()
export class ProfileController {
    constructor(private readonly userService: ProfileService) {
    }

    @Get(':id')
    getUserById(@Param('id') id): string {
        return this.userService.getUserById(id);
    }

    @Get()
    getAllUsers(): string {
        return this.userService.getAllUsers();
    }

    @Delete(':id')
    deleteUser(@Param('id') id): string {
        return this.userService.deleteUser(id);
    }

    @Put(':id')
    updateUserCredential(@Param('id') id): string {
        return this.userService.updateProfileCredential(id);
    }
}