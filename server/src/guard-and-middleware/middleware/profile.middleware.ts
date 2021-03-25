import {Injectable, NestMiddleware} from '@nestjs/common';
import {Request, Response, NextFunction} from 'express';
import {ProfileService} from "../../profile/profile.service";
import {ProfileInterface} from "../../types/types";

@Injectable()
export class LoginMiddleware implements NestMiddleware {

    constructor(private readonly profileService: ProfileService) {
    }

    async use(req: Request, res: Response, next: NextFunction) {

        next();
    }
}
