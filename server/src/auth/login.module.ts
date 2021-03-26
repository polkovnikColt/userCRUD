import {MiddlewareConsumer, Module, NestModule, RequestMethod} from '@nestjs/common';
import {PassportModule} from '@nestjs/passport';
import {LoginController} from './login.controller';
import {JwtModule} from '@nestjs/jwt';
import {ConfigModule, ConfigService} from '@nestjs/config';
import {JwtStrategy} from './jwt/jwt.strategy';
import {LoginService} from "./login.service";
import {LoginMiddleware} from "../guard-and-middleware/middleware/login.middleware";
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
        consumer
            .apply(LoginMiddleware)
            .forRoutes({path:'login', method: RequestMethod.POST});
        consumer
            .apply(LoginMiddleware)
            .forRoutes({path:'login/registration', method: RequestMethod.POST});

    }
}