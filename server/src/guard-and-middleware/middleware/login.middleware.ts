import {BadRequestException, Injectable, NestMiddleware, UnauthorizedException} from '@nestjs/common';
import {Request, Response, NextFunction} from 'express';
import {LoginService} from "../../auth/login.service";
import {LoginResponseType} from "../../types/types";

@Injectable()
export class LoginMiddleware implements NestMiddleware {

    constructor(private readonly loginService: LoginService) {
    }

    async use(req: Request, res: Response, next: NextFunction) {
        const response: LoginResponseType = req.originalUrl.includes('registration') ?
            await this.loginService.registration(req.body) :
            await this.loginService.login(req.body);
        if (response.loginError) {
           throw new UnauthorizedException();
        }
        if(response.registrationError){
            throw new BadRequestException();
        }
        next();
    }

}
