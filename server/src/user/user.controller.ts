import {Controller, Delete, Get, Param, Post, Put, Req} from '@nestjs/common';
import { UserService } from './user.service';
import {UserInterface} from "../types/types";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get(':id')
    getUserById(@Param('id') email): Promise<UserInterface> {
        return this.userService.getUserByName(email);
    }

    @Get()
    getAllUsers():Promise<UserInterface[]> {
        return this.userService.getAllUsers();
    }

    @Post()
    createUser(@Req() req):Promise<UserInterface>{
        return this.userService.createUser(req.body);
    }

    @Delete(':id')
    deleteUser(@Param('id') email):Promise<UserInterface>{
        return this.userService.deleteUser(email);
    }

    @Put(':id')
    updateUserCredential(@Param('id') email,@Req() req):Promise<UserInterface>{
        return this.userService.updateUserCredential(email, req.body);
    }
}