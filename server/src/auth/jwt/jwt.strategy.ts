import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable } from '@nestjs/common';
import { LoginService} from '../login.service';
import { ConfigService } from '@nestjs/config';
import {config} from "./secret";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: config.secret,
        });

    }
    async validate(payload: any): Promise<any> {
        const {iat, exp, ...res} = payload;
        return res;
    }

}