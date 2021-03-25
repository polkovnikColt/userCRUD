import {Injectable, NestMiddleware, UnauthorizedException} from '@nestjs/common';
import {Request, Response, NextFunction} from 'express';
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class LoginOnLoadMiddleware implements NestMiddleware {

    constructor(private readonly jwt: JwtService) {
    }

    async use(req: Request, res: Response, next: NextFunction) {
        const token = req.headers.authorization.split(' ')[1];
        try {
            const decode = this.jwt.verify(token);
            console.log(decode);
        } catch (e) {
            throw new UnauthorizedException();
        }
        next();
    }

}