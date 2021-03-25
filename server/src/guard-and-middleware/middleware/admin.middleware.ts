import {ForbiddenException, Injectable, NestMiddleware} from '@nestjs/common';
import {Request, Response, NextFunction} from 'express';


@Injectable()
export class AdminMiddleware implements NestMiddleware {

    constructor() {
    }

    use(req: Request, res: Response, next: NextFunction) {
        const role:string = req.body.user.role;
        if(role !== 'admin'){
            throw new ForbiddenException();
        }
        next();
    }

}
