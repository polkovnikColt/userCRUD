import {ForbiddenException, Injectable, NestMiddleware} from '@nestjs/common';
import {Request, Response, NextFunction} from 'express';
import {JwtService} from "@nestjs/jwt";
import {UserInterface} from "../../types/types";



@Injectable()
export class AdminMiddleware implements NestMiddleware {

    constructor(private readonly jwt: JwtService) {
    }

    use(req: Request, res: Response, next: NextFunction) {
        const token = req.headers.authorization.split(' ')[1]
        const decode = this.jwt.decode(token);

        if(!(typeof decode === "string") && decode.user.role !== 'admin'){
            throw new ForbiddenException();
        }
        next();
    }

}
