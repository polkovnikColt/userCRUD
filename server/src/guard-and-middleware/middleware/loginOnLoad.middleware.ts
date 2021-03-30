import {Injectable, NestMiddleware, UnauthorizedException} from '@nestjs/common';
import {Request, Response, NextFunction} from 'express';
import {JwtService} from "@nestjs/jwt";
import {getManager} from "typeorm/index";

@Injectable()
export class LoginOnLoadMiddleware implements NestMiddleware {
    private readonly manager;

    constructor(private readonly jwt: JwtService) {
        this.manager = getManager();
    }

    use(req: Request, res: Response, next: NextFunction) {
        const token: string = req.headers.authorization.split(' ')[1];
        try {
            const decode = this.jwt.verify(token);
            if (!(typeof decode === "string")) {
                req.body = decode.user;
            }
        } catch (e) {
            throw new UnauthorizedException();
        }
        next();
    }

}