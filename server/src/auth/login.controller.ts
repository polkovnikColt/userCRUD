import {Controller, Post, Req} from "@nestjs/common";
import {TokenType, UserInterface} from "../types/types";
import {LoginService} from "./login.service";

@Controller('login')
export class LoginController{

    constructor(private readonly loginService: LoginService) {
    }

    @Post()
    login(@Req() req):Promise<TokenType>{
        return this.loginService.login(req.body);
    }

    @Post('registration')
    registration(@Req() req): Promise<TokenType>{
        return this.loginService.registration(req.body);
    }
}