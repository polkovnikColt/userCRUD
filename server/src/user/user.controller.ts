import {Controller, Delete, Get, Param, Put, Req, UseGuards} from '@nestjs/common';
import { UserService } from './user.service';
import { UserInterface} from "../types/types";
import {AuthGuard} from "@nestjs/passport";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @UseGuards(AuthGuard('jwt'))
    @Get(':id')
    getUserByEmail(@Param('id') email): Promise<UserInterface> {
        return this.userService.getUserByName(email);
    }

    // @UseGuards(AuthGuard('jwt'))
    @Get()
    getAllUsers():Promise<UserInterface[]> {
        return this.userService.getAllUsers();
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    deleteUser(@Param('id') id):Promise<UserInterface>{
        return this.userService.deleteUser(id);
    }

    @UseGuards(AuthGuard('jwt'))
    @Put(':id')
    updateUserCredential(@Param('id') id,@Req() req):Promise<UserInterface>{
        return this.userService.updateUserCredential(id, req.body);
    }
}