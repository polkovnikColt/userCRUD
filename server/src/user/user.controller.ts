import {Controller, Delete, Get, Param, Post, Put, Req, UseGuards} from '@nestjs/common';
import { UserService } from './user.service';
import { UserInterface} from "../types/types";
import {AuthGuard} from "@nestjs/passport";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @UseGuards(AuthGuard('jwt'))
    @Get(':id')
    getUserById(@Param('id') email): Promise<UserInterface> {
        return this.userService.getUserByName(email);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get()
    getAllUsers():Promise<UserInterface[]> {
        return this.userService.getAllUsers();
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    deleteUser(@Param('id') email):Promise<UserInterface>{
        return this.userService.deleteUser(email);
    }

    @UseGuards(AuthGuard('jwt'))
    @Put(':id')
    updateUserCredential(@Param('id') email,@Req() req):Promise<UserInterface>{
        return this.userService.updateUserCredential(email, req.body);
    }
}