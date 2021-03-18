import {Controller, Delete, Get, Param, Put} from '@nestjs/common';
import { UserService } from './user.service';

@Controller()
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get(':id')
    getUserById(@Param('id') id): string {
        return this.userService.getUserById(id);
    }

    @Get()
    getAllUsers():string {
        return this.userService.getAllUsers();
    }

    @Delete(':id')
    deleteUser(@Param('id') id):string{
        return this.userService.deleteUser(id);
    }

    @Put(':id')
    updateUserCredential(@Param('id') id):string{
        return this.userService.updateProfileCredential(id);
    }
}