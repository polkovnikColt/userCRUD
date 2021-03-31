import {MiddlewareConsumer, Module, NestModule, RequestMethod} from '@nestjs/common';
import {LoginController} from './login.controller';
import { ConfigService} from '@nestjs/config';
import {JwtStrategy} from './jwt/jwt.strategy';
import {LoginService} from "./login.service";
import {LoginOnLoadMiddleware} from "../guard-and-middleware/middleware/loginOnLoad.middleware";
import {JwtShared} from "./jwt/jwt.module";

@Module({
    imports: [JwtShared],
    controllers: [LoginController],
    providers: [LoginService, JwtStrategy, ConfigService]
})

export class LoginModule implements NestModule {
    configure(consumer: MiddlewareConsumer): void {
        consumer
            .apply(LoginOnLoadMiddleware)
            .forRoutes({path:"login/load",method: RequestMethod.GET});
    }
}